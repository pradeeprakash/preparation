import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, CheckCircle2, Circle } from "lucide-react";
import { PHASES, dayKey } from "@/data/plan.js";
import { DIFFICULTY_COLORS } from "@/data/patterns.js";
import { useProgress } from "@/store/useProgress.js";
import { cn } from "@/lib/utils.js";

export default function Plan() {
  const [expandedPhase, setExpandedPhase] = useState(1);
  const [expandedWeek, setExpandedWeek] = useState(1);
  const dayLogs = useProgress((s) => s.dayLogs);
  const toggleDay = useProgress((s) => s.toggleDay);

  const completedSet = new Set(dayLogs.filter((l) => l.completed).map((l) => l.id));

  return (
    <div className="space-y-4 animate-fade-in">
      <header className="text-center py-4">
        <div className="text-xs tracking-widest text-ink-300 uppercase mb-2">
          JavaScript · FAANG · 12 Weeks · 1–2 hrs/day
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold gradient-text">DSA Mastery Plan</h1>
        <p className="text-ink-200 text-sm mt-2">From zero to FAANG-ready · built for visual learners</p>
      </header>

      {PHASES.map((phase) => {
        const isOpen = expandedPhase === phase.id;
        const phaseTotal = phase.weeks.reduce((s, w) => s + w.dailyPlan.length, 0);
        const phaseDone = phase.weeks.reduce(
          (s, w) => s + w.dailyPlan.filter((_, di) => completedSet.has(dayKey(w.week, di))).length,
          0,
        );
        const pct = Math.round((phaseDone / phaseTotal) * 100);

        return (
          <div key={phase.id}>
            <button
              onClick={() => setExpandedPhase(isOpen ? null : phase.id)}
              className={cn(
                "w-full text-left rounded-2xl border px-5 py-4 transition-all",
                isOpen ? "bg-ink-600" : "bg-ink-700 hover:bg-ink-600",
              )}
              style={{ borderColor: isOpen ? phase.color + "66" : "#334155" }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{phase.icon}</span>
                  <div>
                    <div className="text-lg font-extrabold" style={{ color: phase.color }}>
                      {phase.title}
                    </div>
                    <div className="text-xs text-ink-300 mt-0.5">{phase.subtitle}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="px-3 py-1 rounded-full text-xs font-bold"
                    style={{ color: phase.color, background: "#0f172a" }}
                  >
                    {pct}%
                  </div>
                  <ChevronDown
                    size={18}
                    className={cn("text-ink-300 transition-transform", isOpen && "rotate-180")}
                  />
                </div>
              </div>
              <div className="mt-3 h-1 rounded-full bg-ink-800 overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: phase.color }}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 space-y-3">
                    <div
                      className="rounded-xl p-4 text-sm text-ink-100 border-l-4"
                      style={{ borderColor: phase.color, background: "#0f172a" }}
                    >
                      <strong style={{ color: phase.color }}>💡 Phase philosophy:</strong>{" "}
                      {phase.philosophy}
                    </div>
                    <div className="rounded-xl p-4 bg-ink-600 border border-ink-500 text-sm text-ink-100">
                      <div className="text-xs font-semibold uppercase tracking-wider text-ink-50 mb-2">
                        Rules for this phase
                      </div>
                      {phase.methodology.map((m, i) => (
                        <div key={i} className="text-ink-100 mb-1">
                          {m}
                        </div>
                      ))}
                    </div>

                    {phase.weeks.map((week) => {
                      const weekOpen = expandedWeek === week.week;
                      const wkDone = week.dailyPlan.filter((_, di) =>
                        completedSet.has(dayKey(week.week, di)),
                      ).length;
                      const wkPct = Math.round((wkDone / week.dailyPlan.length) * 100);

                      return (
                        <div key={week.week}>
                          <button
                            onClick={() => setExpandedWeek(weekOpen ? null : week.week)}
                            className={cn(
                              "w-full text-left rounded-xl px-4 py-3 border transition-all",
                              weekOpen
                                ? "bg-ink-700 border-ink-500"
                                : "bg-ink-800 border-ink-600 hover:bg-ink-700",
                            )}
                          >
                            <div className="flex items-center justify-between flex-wrap gap-2">
                              <div>
                                <span
                                  className="text-sm font-extrabold"
                                  style={{ color: phase.color }}
                                >
                                  Week {week.week}
                                </span>
                                <span className="text-sm text-ink-200 ml-2">{week.title}</span>
                              </div>
                              <span
                                className={cn(
                                  "text-xs font-bold",
                                  wkPct === 100 ? "text-accent-green" : "text-ink-300",
                                )}
                              >
                                {wkPct === 100 ? "✅" : `${wkPct}%`}
                              </span>
                            </div>
                          </button>

                          <AnimatePresence initial={false}>
                            {weekOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden"
                              >
                                <div className="pt-2 space-y-2">
                                  <div className="rounded-lg p-3 text-xs text-ink-100 bg-gradient-to-br from-ink-800 to-ink-700 border border-ink-500 leading-relaxed">
                                    {week.mentalModel}
                                  </div>

                                  {week.dailyPlan.map((d, di) => {
                                    const key = dayKey(week.week, di);
                                    const done = completedSet.has(key);
                                    return (
                                      <DayRow
                                        key={di}
                                        day={d}
                                        done={done}
                                        onToggle={() => toggleDay(key)}
                                      />
                                    );
                                  })}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function DayRow({ day, done, onToggle }) {
  return (
    <div
      className={cn(
        "rounded-lg p-3 border transition-all",
        done
          ? "bg-accent-cyan/5 border-accent-cyan/30 opacity-70"
          : "bg-ink-800 border-ink-600",
      )}
    >
      <div className="flex items-start gap-3">
        <button
          onClick={onToggle}
          className="mt-0.5 flex-shrink-0"
          aria-label={done ? "Mark incomplete" : "Mark complete"}
        >
          {done ? (
            <CheckCircle2 className="text-accent-cyan" size={20} />
          ) : (
            <Circle className="text-ink-400" size={20} />
          )}
        </button>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 text-xs text-ink-300 mb-1">
            <span className="font-bold text-ink-100">{day.day}</span>
            <span
              className="px-2 py-0.5 rounded font-bold"
              style={{
                color: DIFFICULTY_COLORS[day.difficulty] || "#64748b",
                background: (DIFFICULTY_COLORS[day.difficulty] || "#64748b") + "22",
              }}
            >
              {day.difficulty}
            </span>
            <span className="text-ink-300">{day.problem}</span>
            <span className="text-ink-300">· {day.pattern}</span>
          </div>
          <div className={cn("text-sm", done ? "text-ink-200 line-through" : "text-ink-50")}>
            {day.task}
          </div>
          <div className="text-xs text-ink-300 italic mt-1">💡 {day.tip}</div>
        </div>
      </div>
    </div>
  );
}
