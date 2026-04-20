import { useMemo } from "react";
import { motion } from "framer-motion";
import { Flame, Trophy, Target, CheckCircle2, Circle } from "lucide-react";
import { PHASES, TOTAL_DAYS, getDayByGlobalIndex, dayKey } from "@/data/plan.js";
import { DIFFICULTY_COLORS } from "@/data/patterns.js";
import { useProgress } from "@/store/useProgress.js";
import { todayISO, daysBetween } from "@/lib/utils.js";
import StreakHeatmap from "@/components/StreakHeatmap.jsx";

export default function Dashboard() {
  const streak = useProgress((s) => s.streak);
  const longestStreak = useProgress((s) => s.longestStreak);
  const dayLogs = useProgress((s) => s.dayLogs);
  const startDate = useProgress((s) => s.startDate);
  const toggleDay = useProgress((s) => s.toggleDay);

  const completedSet = useMemo(
    () => new Set(dayLogs.filter((l) => l.completed).map((l) => l.id)),
    [dayLogs],
  );
  const doneCount = completedSet.size;
  const progressPct = Math.round((doneCount / TOTAL_DAYS) * 100);

  // Today's target = startDate + daysElapsed, capped at TOTAL_DAYS - 1.
  const todayIdx = useMemo(() => {
    if (!startDate) return 0;
    const elapsed = Math.max(0, daysBetween(startDate, todayISO()));
    return Math.min(elapsed, TOTAL_DAYS - 1);
  }, [startDate]);
  const today = useMemo(() => getDayByGlobalIndex(todayIdx), [todayIdx]);

  const todayKey = today ? dayKey(today.weekNum, today.dayIdx) : null;
  const todayDone = todayKey ? completedSet.has(todayKey) : false;

  const currentPhase = today?.phase;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Hero */}
      <div className="grid md:grid-cols-3 gap-4">
        <StatCard
          icon={<Flame className="text-accent-amber" />}
          label="Current streak"
          value={streak}
          suffix="days"
          accent="text-accent-amber"
        />
        <StatCard
          icon={<Trophy className="text-accent-cyan" />}
          label="Longest streak"
          value={longestStreak}
          suffix="days"
          accent="text-accent-cyan"
        />
        <StatCard
          icon={<Target className="text-accent-green" />}
          label="Total progress"
          value={`${doneCount}/${TOTAL_DAYS}`}
          suffix={`· ${progressPct}%`}
          accent="text-accent-green"
        />
      </div>

      {/* Today's task */}
      {today && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-ink-600 to-ink-700 border border-ink-500 rounded-2xl p-6"
          style={{ borderColor: currentPhase.color + "66" }}
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-xs text-ink-300 mb-1">
                <span>{currentPhase.icon}</span>
                <span>{currentPhase.title}</span>
                <span>·</span>
                <span>Week {today.weekNum}</span>
                <span>·</span>
                <span>{today.day.day}</span>
                <span
                  className="ml-2 px-2 py-0.5 rounded text-[10px] font-bold"
                  style={{
                    color: DIFFICULTY_COLORS[today.day.difficulty] || "#64748b",
                    background: (DIFFICULTY_COLORS[today.day.difficulty] || "#64748b") + "22",
                  }}
                >
                  {today.day.difficulty}
                </span>
              </div>
              <div className="text-xl font-bold text-ink-50 mb-1">{today.day.task}</div>
              <div className="text-sm text-ink-200">{today.day.problem}</div>
              <div className="mt-3 text-sm text-ink-100 italic">💡 {today.day.tip}</div>
              <div className="mt-3 text-xs font-semibold text-ink-300">Pattern: {today.day.pattern}</div>
            </div>
            <button
              onClick={() => toggleDay(todayKey)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
                todayDone
                  ? "bg-accent-green/20 text-accent-green border border-accent-green/50"
                  : "bg-ink-600 text-ink-50 border border-ink-400 hover:bg-ink-500"
              }`}
            >
              {todayDone ? <CheckCircle2 size={18} /> : <Circle size={18} />}
              {todayDone ? "Done — nice" : "Mark done"}
            </button>
          </div>
        </motion.div>
      )}

      {/* Overall progress bar */}
      <div className="bg-ink-600 border border-ink-500 rounded-2xl p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm font-semibold text-ink-100">12-week plan progress</div>
          <div className="text-sm text-ink-200">{progressPct}%</div>
        </div>
        <div className="h-2 bg-ink-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full"
            style={{
              background: "linear-gradient(90deg, #22d3ee, #a78bfa, #f472b6, #34d399)",
            }}
            initial={{ width: 0 }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.6 }}
          />
        </div>
        <div className="flex gap-2 mt-3 flex-wrap text-[11px]">
          {PHASES.map((p) => {
            const phaseTotal = p.weeks.reduce((s, w) => s + w.dailyPlan.length, 0);
            const phaseDone = p.weeks.reduce(
              (s, w) => s + w.dailyPlan.filter((_, di) => completedSet.has(dayKey(w.week, di))).length,
              0,
            );
            return (
              <div
                key={p.id}
                className="px-2 py-1 rounded-md border"
                style={{
                  color: p.color,
                  borderColor: p.color + "66",
                  background: p.color + "11",
                }}
              >
                {p.icon} {p.title} — {phaseDone}/{phaseTotal}
              </div>
            );
          })}
        </div>
      </div>

      {/* Heatmap */}
      <StreakHeatmap />
    </div>
  );
}

function StatCard({ icon, label, value, suffix, accent }) {
  return (
    <div className="bg-ink-600 border border-ink-500 rounded-2xl p-4">
      <div className="flex items-center gap-2 text-ink-300 text-xs mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <div className={`text-3xl font-bold ${accent}`}>{value}</div>
        <div className="text-ink-300 text-xs">{suffix}</div>
      </div>
    </div>
  );
}
