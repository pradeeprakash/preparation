import Dexie from "dexie";

export const db = new Dexie("dsa-mastery");

// v1 schema
// day_logs.id = "week-dayIdx" (e.g. "1-0" means Week 1 Day 1)
// settings keyed by 'key'
// journal_entries auto-increment, sorted by createdAt desc
db.version(1).stores({
  day_logs: "id, completed, completedAt, updatedAt",
  settings: "key",
  journal_entries: "++id, dayKey, createdAt",
});

export async function upsertDayLog(entry) {
  const now = Date.now();
  const existing = await db.day_logs.get(entry.id);
  await db.day_logs.put({
    ...(existing || {}),
    ...entry,
    updatedAt: now,
  });
}

export async function getSetting(key, fallback = null) {
  const row = await db.settings.get(key);
  return row?.value ?? fallback;
}

export async function setSetting(key, value) {
  await db.settings.put({ key, value, updatedAt: Date.now() });
}
