import { supabase, SUPABASE_ENABLED } from "./supabase.js";
import { db } from "./db.js";

/**
 * Local-first sync: Dexie → Supabase. Runs after every write (debounced) and on reconnect.
 * Last-write-wins by updated_at. Single user, so conflict risk is minimal.
 */
let syncTimer = null;
let inFlight = false;

export function scheduleSync(delayMs = 1000) {
  if (!SUPABASE_ENABLED) return;
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(runSync, delayMs);
}

export async function runSync() {
  if (!SUPABASE_ENABLED || inFlight) return;
  inFlight = true;
  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) return;
    const userId = session.user.id;

    // Push local day_logs
    const localLogs = await db.day_logs.toArray();
    if (localLogs.length) {
      const rows = localLogs.map((l) => ({
        user_id: userId,
        day_key: l.id,
        completed: !!l.completed,
        confidence: l.confidence ?? null,
        time_spent_sec: l.timeSpentSec ?? null,
        completed_at: l.completedAt ?? null,
        updated_at: new Date(l.updatedAt || Date.now()).toISOString(),
      }));
      await supabase.from("day_logs").upsert(rows, { onConflict: "user_id,day_key" });
    }

    // Pull remote rows newer than local
    const { data: remote } = await supabase
      .from("day_logs")
      .select("*")
      .eq("user_id", userId);
    if (remote) {
      for (const r of remote) {
        const local = await db.day_logs.get(r.day_key);
        const remoteUpdated = new Date(r.updated_at).getTime();
        if (!local || (local.updatedAt || 0) < remoteUpdated) {
          await db.day_logs.put({
            id: r.day_key,
            completed: !!r.completed,
            confidence: r.confidence,
            timeSpentSec: r.time_spent_sec,
            completedAt: r.completed_at,
            updatedAt: remoteUpdated,
          });
        }
      }
    }
  } catch (err) {
    console.warn("sync failed:", err);
  } finally {
    inFlight = false;
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("online", () => scheduleSync(500));
  window.addEventListener("focus", () => scheduleSync(500));
}
