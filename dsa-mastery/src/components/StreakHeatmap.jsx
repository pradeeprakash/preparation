import { useMemo } from "react";
import { useProgress } from "@/store/useProgress.js";

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function StreakHeatmap() {
  const heatmap = useProgress((s) => s.heatmap);

  const { weeks, monthLabels } = useMemo(() => {
    // Group into weeks (columns). First day of earliest date aligned to Sunday=0.
    if (!heatmap.length) return { weeks: [], monthLabels: [] };
    const firstDate = new Date(heatmap[0].date + "T00:00:00");
    const firstDay = firstDate.getDay(); // 0 = Sun
    const cells = new Array(firstDay).fill(null).concat(heatmap);
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    // Month labels: one per week at the top where the month changes.
    const monthLabels = weeks.map((w) => {
      const firstReal = w.find((c) => c);
      if (!firstReal) return "";
      const d = new Date(firstReal.date + "T00:00:00");
      return d.getDate() <= 7 ? MONTHS[d.getMonth()] : "";
    });
    return { weeks, monthLabels };
  }, [heatmap]);

  if (!weeks.length) return null;

  return (
    <div className="bg-ink-600 border border-ink-500 rounded-2xl p-4 overflow-x-auto scrollbar-thin">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold text-ink-100">🔥 365-day streak map</div>
        <div className="flex items-center gap-2 text-xs text-ink-300">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-ink-800 border border-ink-500" />
          <div className="w-3 h-3 rounded-sm bg-accent-green/40" />
          <div className="w-3 h-3 rounded-sm bg-accent-green/70" />
          <div className="w-3 h-3 rounded-sm bg-accent-green" />
          <span>More</span>
        </div>
      </div>
      <div className="inline-block">
        <div className="flex gap-[3px] text-[10px] text-ink-300 mb-1 ml-4">
          {monthLabels.map((m, i) => (
            <div key={i} className="w-[13px] text-center">{m}</div>
          ))}
        </div>
        <div className="flex gap-[3px]">
          <div className="flex flex-col gap-[3px] text-[10px] text-ink-300 mr-1 mt-[1px]">
            <div className="h-[13px]">&nbsp;</div>
            <div className="h-[13px]">Mon</div>
            <div className="h-[13px]">&nbsp;</div>
            <div className="h-[13px]">Wed</div>
            <div className="h-[13px]">&nbsp;</div>
            <div className="h-[13px]">Fri</div>
            <div className="h-[13px]">&nbsp;</div>
          </div>
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((cell, ci) => {
                if (!cell) return <div key={ci} className="w-[13px] h-[13px]" />;
                const bg = cell.count > 0 ? "bg-accent-green" : "bg-ink-800 border border-ink-500";
                return (
                  <div
                    key={ci}
                    className={`w-[13px] h-[13px] rounded-sm ${bg}`}
                    title={`${cell.date}: ${cell.count ? "done" : "not done"}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
