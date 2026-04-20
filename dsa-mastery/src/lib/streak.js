import { todayISO, addDays, daysBetween } from "./utils.js";

/**
 * Compute current streak from day_logs.
 * A streak is the count of consecutive days (ending today or yesterday) with completed: true.
 * If today is not done but yesterday is, the streak is still alive — break not confirmed yet.
 */
export function computeStreak(dayLogs) {
  const completedDates = new Set(
    dayLogs.filter((l) => l.completed && l.completedAt).map((l) => l.completedAt.slice(0, 10)),
  );
  const today = todayISO();
  let anchor = completedDates.has(today) ? today : addDays(today, -1);
  if (!completedDates.has(anchor)) return 0;
  let streak = 0;
  let cursor = anchor;
  while (completedDates.has(cursor)) {
    streak++;
    cursor = addDays(cursor, -1);
  }
  return streak;
}

/** Longest all-time streak (for motivation). */
export function computeLongestStreak(dayLogs) {
  const dates = dayLogs.filter((l) => l.completed && l.completedAt).map((l) => l.completedAt.slice(0, 10)).sort();
  if (dates.length === 0) return 0;
  let best = 1;
  let cur = 1;
  for (let i = 1; i < dates.length; i++) {
    if (daysBetween(dates[i - 1], dates[i]) === 1) {
      cur++;
      best = Math.max(best, cur);
    } else {
      cur = 1;
    }
  }
  return best;
}

/** For the 365-day heatmap. Returns array of {date, count} for last N days. */
export function buildHeatmap(dayLogs, days = 365) {
  const completed = new Set(
    dayLogs.filter((l) => l.completed && l.completedAt).map((l) => l.completedAt.slice(0, 10)),
  );
  const today = todayISO();
  const cells = [];
  for (let i = days - 1; i >= 0; i--) {
    const date = addDays(today, -i);
    cells.push({ date, count: completed.has(date) ? 1 : 0 });
  }
  return cells;
}
