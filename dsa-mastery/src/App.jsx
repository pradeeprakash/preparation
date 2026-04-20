import { useEffect } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { LayoutDashboard, Map, BookOpen, Settings2, Flame } from "lucide-react";
import { cn } from "@/lib/utils.js";
import { useProgress } from "@/store/useProgress.js";
import { runSync } from "@/lib/sync.js";
import Dashboard from "@/routes/Dashboard.jsx";
import Plan from "@/routes/Plan.jsx";
import Patterns from "@/routes/Patterns.jsx";
import SettingsPage from "@/routes/Settings.jsx";

const NAV = [
  { to: "/", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/plan", label: "Plan", icon: Map },
  { to: "/patterns", label: "Patterns", icon: BookOpen },
  { to: "/settings", label: "Settings", icon: Settings2 },
];

export default function App() {
  const init = useProgress((s) => s.init);
  const loaded = useProgress((s) => s.loaded);
  const streak = useProgress((s) => s.streak);

  useEffect(() => {
    init();
    // Pull remote changes on mount
    runSync();
  }, [init]);

  return (
    <div className="min-h-svh flex flex-col">
      <header className="sticky top-0 z-20 backdrop-blur-md bg-ink-950/80 border-b border-ink-600">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <NavLink to="/" className="flex items-center gap-2 font-bold text-lg gradient-text">
            <span>🎯</span>
            <span>DSA Mastery</span>
          </NavLink>
          <nav className="flex items-center gap-1">
            {NAV.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  cn(
                    "px-3 py-2 rounded-lg text-sm flex items-center gap-2 transition-colors",
                    isActive
                      ? "bg-ink-600 text-ink-50"
                      : "text-ink-200 hover:text-ink-50 hover:bg-ink-700/60",
                  )
                }
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-1 text-sm">
            <Flame size={16} className="text-accent-amber" />
            <span className="font-bold text-accent-amber">{streak}</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 py-6">
        {!loaded ? (
          <div className="text-ink-300 text-center py-20">Loading your progress…</div>
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/patterns" element={<Patterns />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>

      <footer className="border-t border-ink-600 py-4 text-center text-xs text-ink-300">
        Built for the 12-week FAANG grind · Draw it, name the pattern, 3-line skeleton, ship it.
      </footer>
    </div>
  );
}
