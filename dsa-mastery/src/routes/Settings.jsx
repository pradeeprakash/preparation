import { useEffect, useState } from "react";
import { SUPABASE_ENABLED, supabase, signInWithEmail, signOut, getSession } from "@/lib/supabase.js";
import { ntfyPush } from "@/lib/notify.js";
import { getSetting, setSetting } from "@/lib/db.js";
import { runSync } from "@/lib/sync.js";
import { Cloud, Mail, Bell, LogOut, CheckCircle2, AlertCircle } from "lucide-react";

const NTFY_TOPIC = import.meta.env.VITE_NTFY_TOPIC || "";

export default function Settings() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState(null);
  const [testStatus, setTestStatus] = useState(null);
  const [startDate, setStart] = useState("");

  useEffect(() => {
    getSession().then(setSession);
    getSetting("startDate").then((v) => setStart(v || ""));
    if (!supabase) return;
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => {
      setSession(s);
      if (s) runSync();
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function onSignIn(e) {
    e.preventDefault();
    setEmailStatus(null);
    try {
      await signInWithEmail(email);
      setEmailStatus({ ok: true, msg: "Magic link sent. Check your email." });
    } catch (err) {
      setEmailStatus({ ok: false, msg: err.message });
    }
  }

  async function onSignOut() {
    await signOut();
    setSession(null);
  }

  async function sendTestPush() {
    setTestStatus(null);
    const res = await ntfyPush(NTFY_TOPIC, {
      title: "DSA Mastery — test push",
      message: "If you got this, notifications are wired up. 🎯",
      priority: "default",
      tags: ["bell"],
    });
    setTestStatus(res.ok ? { ok: true, msg: "Sent ✓" } : { ok: false, msg: res.reason || `Status ${res.status}` });
  }

  async function saveStart(e) {
    e.preventDefault();
    if (!startDate) return;
    await setSetting("startDate", startDate);
    location.reload();
  }

  return (
    <div className="space-y-5 max-w-2xl animate-fade-in">
      <h1 className="text-2xl font-bold text-accent-cyan">Settings</h1>

      <Section
        title="Cloud sync (Supabase)"
        icon={<Cloud size={18} className="text-accent-cyan" />}
      >
        {!SUPABASE_ENABLED ? (
          <div className="text-sm text-accent-amber flex items-start gap-2">
            <AlertCircle size={16} className="mt-0.5 flex-shrink-0" />
            <div>
              Supabase not configured. Add <code className="text-ink-50">VITE_SUPABASE_URL</code>{" "}
              and <code className="text-ink-50">VITE_SUPABASE_ANON_KEY</code> to{" "}
              <code className="text-ink-50">.env.local</code> and restart <code>npm run dev</code>.
              See <code>.env.local.example</code> for the template.
            </div>
          </div>
        ) : session ? (
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="text-sm text-ink-100">
              Signed in as <strong>{session.user.email}</strong>
            </div>
            <button
              onClick={onSignOut}
              className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg bg-ink-700 border border-ink-500 hover:bg-ink-600"
            >
              <LogOut size={14} /> Sign out
            </button>
          </div>
        ) : (
          <form onSubmit={onSignIn} className="flex gap-2 flex-wrap">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 min-w-[220px] px-3 py-2 rounded-lg bg-ink-800 border border-ink-500 text-ink-50 placeholder:text-ink-400"
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/50 font-semibold hover:bg-accent-cyan/30"
            >
              <Mail size={14} /> Magic link
            </button>
          </form>
        )}
        {emailStatus && (
          <div
            className={`text-sm mt-2 ${emailStatus.ok ? "text-accent-green" : "text-accent-red"}`}
          >
            {emailStatus.msg}
          </div>
        )}
      </Section>

      <Section
        title="Push notifications (ntfy.sh)"
        icon={<Bell size={18} className="text-accent-amber" />}
      >
        {NTFY_TOPIC ? (
          <>
            <div className="text-sm text-ink-200 mb-2">
              Topic: <code className="text-ink-50">{NTFY_TOPIC}</code>
            </div>
            <ol className="text-xs text-ink-300 space-y-1 mb-3 list-decimal list-inside">
              <li>
                Install the <strong>ntfy</strong> app on your phone (iOS / Android).
              </li>
              <li>
                Add subscription → paste the topic above → Save.
              </li>
              <li>Hit the test button below. If a notification arrives, you're done.</li>
            </ol>
            <button
              onClick={sendTestPush}
              className="px-4 py-2 rounded-lg bg-accent-amber/20 text-accent-amber border border-accent-amber/50 font-semibold hover:bg-accent-amber/30 text-sm"
            >
              Send test push
            </button>
            {testStatus && (
              <div
                className={`text-sm mt-2 flex items-center gap-1 ${
                  testStatus.ok ? "text-accent-green" : "text-accent-red"
                }`}
              >
                {testStatus.ok ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                {testStatus.msg}
              </div>
            )}
          </>
        ) : (
          <div className="text-sm text-accent-amber">
            No ntfy topic set. Set <code>VITE_NTFY_TOPIC</code> in <code>.env.local</code>.
          </div>
        )}
      </Section>

      <Section title="Plan start date">
        <form onSubmit={saveStart} className="flex gap-2 flex-wrap items-center">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStart(e.target.value)}
            className="px-3 py-2 rounded-lg bg-ink-800 border border-ink-500 text-ink-50"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-ink-700 border border-ink-500 hover:bg-ink-600 text-sm"
          >
            Save
          </button>
          <div className="text-xs text-ink-300 flex-1">
            Today's task on the Dashboard is computed from this date.
          </div>
        </form>
      </Section>
    </div>
  );
}

function Section({ title, icon, children }) {
  return (
    <section className="bg-ink-600 border border-ink-500 rounded-2xl p-5">
      <h2 className="text-sm font-bold flex items-center gap-2 mb-3">
        {icon}
        <span>{title}</span>
      </h2>
      {children}
    </section>
  );
}
