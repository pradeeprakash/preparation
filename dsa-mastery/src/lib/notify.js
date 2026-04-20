const NTFY_BASE = "https://ntfy.sh";

const PRIORITY_MAP = { min: 1, low: 2, default: 3, high: 4, max: 5 };

function normalizePriority(p) {
  if (typeof p === "number") return p;
  if (typeof p === "string" && PRIORITY_MAP[p]) return PRIORITY_MAP[p];
  return undefined;
}

/**
 * Sends a push via ntfy.sh. Uses JSON publishing so UTF-8 (em-dashes, emoji)
 * in titles and messages work — regular headers are ASCII-only and would
 * crash fetch with "non ISO-8859-1 code point".
 */
export async function ntfyPush(topic, { title, message, priority, tags } = {}) {
  if (!topic) return { ok: false, reason: "no-topic" };
  const body = { topic, message: message ?? "" };
  if (title) body.title = title;
  const p = normalizePriority(priority);
  if (p !== undefined) body.priority = p;
  if (tags && tags.length) body.tags = tags;
  try {
    const res = await fetch(NTFY_BASE, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    return { ok: res.ok, status: res.status };
  } catch (err) {
    return { ok: false, reason: String(err) };
  }
}
