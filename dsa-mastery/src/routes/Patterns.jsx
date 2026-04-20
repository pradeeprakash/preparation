import { PATTERN_CLUES } from "@/data/patterns.js";

export default function Patterns() {
  return (
    <div className="space-y-4 animate-fade-in">
      <header className="mb-2">
        <h1 className="text-2xl font-bold text-accent-purple">🗺 Pattern Recognition Map</h1>
        <p className="text-sm text-ink-300 mt-1">
          When you see these clues in a problem, reach for these patterns.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-3">
        {PATTERN_CLUES.map((item, i) => (
          <div
            key={i}
            className="rounded-xl p-4 border-l-4 bg-ink-600 border border-ink-500 transition-transform hover:-translate-y-0.5"
            style={{ borderLeftColor: item.color }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl flex-shrink-0">{item.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold mb-1" style={{ color: item.color }}>
                  {item.pattern}
                </div>
                <div className="text-xs text-ink-200 mb-1">
                  <span className="font-bold text-ink-50">🔎 Clue: </span>
                  {item.clue}
                </div>
                <div className="text-xs text-ink-300">{item.examples}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl p-5 bg-gradient-to-br from-ink-700 to-ink-600 border border-ink-500 mt-4">
        <h2 className="text-lg font-bold text-accent-pink mb-2">⚡ The 3-Line Rule</h2>
        <p className="text-sm text-ink-200 mb-3">
          Before a single line of code, every problem gets this header. If you can't fill it, you
          haven't solved it — you're guessing.
        </p>
        <pre className="text-xs text-accent-green bg-ink-900 rounded-lg p-3 overflow-x-auto leading-relaxed">
{`// Approach: <pattern> — <why this pattern>
// Time: O(?)   Space: O(?)
// Edge cases: empty, single element, duplicates, negatives, overflow`}
        </pre>
      </div>
    </div>
  );
}
