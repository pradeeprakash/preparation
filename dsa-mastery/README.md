# DSA Mastery

A personal FAANG-prep operating system. 12-week plan, streak tracking, pattern map, cloud sync, and evening nudges so you don't break the chain.

Stack: **Vite · React (JS) · Tailwind · Dexie (IndexedDB) · Zustand · Supabase · ntfy.sh · Framer Motion**.

## v1 — what's shipped

- **Dashboard** — current streak, longest streak, 365-day heatmap, today's task (computed from your plan start date), mark-done button
- **Plan** — the full 12-week roadmap (4 phases, 12 weeks, 84 days) with expandable phases/weeks, per-day checkboxes, difficulty chips
- **Patterns** — the pattern-recognition map (12 clues → pattern → examples) + the "3-line rule" header you must write before every problem
- **Settings** — Supabase magic-link auth, ntfy.sh test push, plan start date
- **Evening check-in** — launchd job at 21:00 → if today's day isn't done → ntfy push to phone + macOS desktop notification

## Setup (first run, ~10 min)

```bash
cd dsa-mastery
npm install

cp .env.local.example .env.local
# → fill in VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY (create a free project at supabase.com)
# → VITE_NTFY_TOPIC is already pre-generated in the example

npm run dev      # http://localhost:5173
```

### Supabase setup

1. Create a project at [supabase.com](https://supabase.com) (free tier is fine).
2. **Project Settings → API** → copy the URL and the *anon* key → paste into `.env.local`.
3. Open the SQL editor → paste `supabase/migrations/001_init.sql` → Run.
4. `npm run dev`, open `/settings`, sign in with the magic link.

### ntfy.sh setup (takes 2 min)

1. Install the **ntfy** app on your phone (iOS / Android).
2. Add a subscription → topic = the value of `VITE_NTFY_TOPIC` from `.env.local`.
3. In the app's `/settings` tab, hit "Send test push". You should feel a buzz.

### Evening reminder (macOS only)

```bash
npm run notify:install     # installs a launchd agent at 21:00 daily
npm run remind:evening     # run once manually to verify
```

Sets `DSA_USER_ID` and `DSA_PLAN_START` in your environment (or in `.env.local`) so the script can check Supabase for whether today's work is done. Find your user id in Supabase → Authentication → Users.

To remove the agent later:
```bash
launchctl bootout gui/$(id -u)/com.pradeep.dsa-mastery.evening
rm ~/Library/LaunchAgents/com.pradeep.dsa-mastery.evening.plist
```

## How the daily loop works

1. Open the app once a day (or get pinged at 21:00 if you haven't).
2. Dashboard shows today's problem based on your plan-start date.
3. Solve it (in whatever tool you like for now — **v2** adds Excalidraw + Monaco in-app).
4. Hit "Mark done". Streak ticks. Heatmap fills. Syncs to Supabase.
5. If you miss a day, the chain breaks — strong motivator not to skip.

## Directory map

```
dsa-mastery/
├── src/
│   ├── App.jsx                     # router shell + nav + streak chip
│   ├── main.jsx                    # entry
│   ├── index.css                   # Tailwind directives + gradient utility
│   ├── routes/
│   │   ├── Dashboard.jsx           # streak, heatmap, today's task
│   │   ├── Plan.jsx                # 12-week expandable plan
│   │   ├── Patterns.jsx            # pattern-map + 3-line rule
│   │   └── Settings.jsx            # Supabase auth, ntfy test, start date
│   ├── components/
│   │   └── StreakHeatmap.jsx       # GitHub-style 365-day calendar
│   ├── lib/
│   │   ├── db.js                   # Dexie schema + helpers
│   │   ├── streak.js               # streak + heatmap compute
│   │   ├── supabase.js             # client + auth
│   │   ├── sync.js                 # Dexie ↔ Supabase, last-write-wins
│   │   ├── notify.js               # ntfy.sh HTTP helper
│   │   └── utils.js                # cn(), date helpers
│   ├── data/
│   │   ├── plan.js                 # the full 4-phase PHASES array
│   │   └── patterns.js             # pattern clues + difficulty colors
│   └── store/
│       └── useProgress.js          # Zustand: dayLogs, streak, heatmap
├── scripts/
│   ├── evening-checkin.js          # 21:00 nudge script
│   └── install-launchd.sh          # macOS launchd installer
├── supabase/
│   └── migrations/
│       └── 001_init.sql            # day_logs table + RLS
└── mental-models/                  # v2: .excalidraw files per problem
```

## What's next (v2, v3, v4)

- **v2 — Mental Model Forge**: `/problem/:id` gated flow — Excalidraw canvas, 3-line skeleton gate, Monaco editor, Web Worker test runner. Ports existing `ds & algo/*.js` as reference solutions.
- **v3 — Retention Engine**: `ts-fsrs` spaced repetition, pattern quiz, daily journal.
- **v4 — Battle Mode**: timed mock interview, analytics, `/export` markdown portfolio, Vercel deploy.

See `/Users/pradeeptheneshaa/.claude/plans/this-is-the-new-effervescent-flask.md` for the full plan.
