import { create } from "zustand";
import { db, upsertDayLog, getSetting, setSetting } from "@/lib/db.js";
import { scheduleSync } from "@/lib/sync.js";
import { todayISO } from "@/lib/utils.js";
import { computeStreak, computeLongestStreak, buildHeatmap } from "@/lib/streak.js";

export const useProgress = create((set, get) => ({
  loaded: false,
  dayLogs: [],
  streak: 0,
  longestStreak: 0,
  heatmap: [],
  startDate: null,

  async init() {
    const [dayLogs, startDate] = await Promise.all([
      db.day_logs.toArray(),
      getSetting("startDate"),
    ]);
    if (!startDate) {
      const today = todayISO();
      await setSetting("startDate", today);
      set({ startDate: today });
    } else {
      set({ startDate });
    }
    get()._applyLogs(dayLogs);
    set({ loaded: true });
    scheduleSync(2000);
  },

  _applyLogs(dayLogs) {
    set({
      dayLogs,
      streak: computeStreak(dayLogs),
      longestStreak: computeLongestStreak(dayLogs),
      heatmap: buildHeatmap(dayLogs, 365),
    });
  },

  async toggleDay(dayKey) {
    const existing = await db.day_logs.get(dayKey);
    const now = new Date();
    const wasCompleted = !!existing?.completed;
    const entry = {
      id: dayKey,
      completed: !wasCompleted,
      completedAt: !wasCompleted ? now.toISOString() : null,
    };
    await upsertDayLog(entry);
    const dayLogs = await db.day_logs.toArray();
    get()._applyLogs(dayLogs);
    scheduleSync();
  },

  async recordConfidence(dayKey, confidence) {
    await upsertDayLog({ id: dayKey, confidence });
    const dayLogs = await db.day_logs.toArray();
    get()._applyLogs(dayLogs);
    scheduleSync();
  },
}));
