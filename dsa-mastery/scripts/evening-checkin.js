#!/usr/bin/env node
/**
 * Evening check-in — fires at 21:00 daily via launchd.
 * If today's day isn't marked done in Supabase, sends an ntfy push.
 *
 * Env required:
 *   VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY  (reads settings from .env.local)
 *   VITE_NTFY_TOPIC
 *   DSA_USER_EMAIL  (optional — used to look up the user_id by email via the anon key;
 *                    requires a server-side function or you can paste a DSA_USER_ID directly)
 *   DSA_USER_ID     (preferred — the auth.users.id UUID)
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
loadEnvLocal(path.resolve(__dirname, "..", ".env.local"));

const NTFY = process.env.VITE_NTFY_TOPIC;
const SUPA_URL = process.env.VITE_SUPABASE_URL;
const SUPA_KEY = process.env.VITE_SUPABASE_ANON_KEY;
const USER_ID = process.env.DSA_USER_ID;

const PLAN_START = process.env.DSA_PLAN_START || todayISO(); // fallback: treat today as start

async function main() {
  if (!NTFY) {
    console.error("No VITE_NTFY_TOPIC set — nothing to do.");
    process.exit(0);
  }

  const today = todayISO();
  const todayKey = computeTodayKey(PLAN_START, today);

  let completed = false;
  if (SUPA_URL && SUPA_KEY && USER_ID) {
    try {
      const res = await fetch(
        `${SUPA_URL}/rest/v1/day_logs?select=completed&user_id=eq.${USER_ID}&day_key=eq.${encodeURIComponent(
          todayKey,
        )}`,
        {
          headers: {
            apikey: SUPA_KEY,
            Authorization: `Bearer ${SUPA_KEY}`,
          },
        },
      );
      const rows = await res.json();
      completed = Array.isArray(rows) && rows.length > 0 && rows[0].completed === true;
    } catch (err) {
      console.warn("Supabase check failed; will nudge anyway:", err.message);
    }
  }

  if (completed) {
    console.log(`[${today}] Day ${todayKey} is done — no nudge.`);
    return;
  }

  const message =
    `Day ${todayKey} isn't done yet. Open the app — it only takes 20 min. ` +
    `Don't break the chain. 🔥`;
  const ok = await ntfyPush(NTFY, {
    title: "⏰ DSA evening check-in",
    message,
    priority: "high",
    tags: ["bell", "warning"],
  });

  // Also desktop notification via osascript (macOS only).
  if (process.platform === "darwin") {
    const { spawn } = await import("node:child_process");
    const script = `display notification ${JSON.stringify(message)} with title ${JSON.stringify(
      "DSA evening check-in",
    )} sound name "Ping"`;
    spawn("osascript", ["-e", script]);
  }

  console.log(`[${today}] Nudged. ntfy=${ok}`);
}

const PRIORITY_MAP = { min: 1, low: 2, default: 3, high: 4, max: 5 };

async function ntfyPush(topic, { title, message, priority, tags }) {
  try {
    const body = { topic, message: message ?? "" };
    if (title) body.title = title;
    const p = typeof priority === "number" ? priority : PRIORITY_MAP[priority];
    if (p !== undefined) body.priority = p;
    if (tags && tags.length) body.tags = tags;
    const res = await fetch("https://ntfy.sh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return res.ok;
  } catch (err) {
    console.warn("ntfy failed:", err.message);
    return false;
  }
}

function todayISO() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function daysBetween(aISO, bISO) {
  const a = new Date(aISO + "T00:00:00").getTime();
  const b = new Date(bISO + "T00:00:00").getTime();
  return Math.round((b - a) / 86_400_000);
}

function computeTodayKey(startISO, todayISOStr) {
  const elapsed = Math.max(0, daysBetween(startISO, todayISOStr));
  const TOTAL = 7 * 12; // 84 days in the plan
  const capped = Math.min(elapsed, TOTAL - 1);
  const week = Math.floor(capped / 7) + 1;
  const dayIdx = capped % 7;
  return `${week}-${dayIdx}`;
}

function loadEnvLocal(p) {
  if (!fs.existsSync(p)) return;
  const text = fs.readFileSync(p, "utf8");
  for (const line of text.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
