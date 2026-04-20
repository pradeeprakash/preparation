#!/usr/bin/env bash
# Install the 21:00 evening check-in as a macOS launchd agent.
# Idempotent: safe to run repeatedly.

set -euo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$HERE/.." && pwd)"
NODE_BIN="$(which node)"

if [[ -z "$NODE_BIN" ]]; then
  echo "❌ 'node' not found in PATH. Install Node 20+ and retry."
  exit 1
fi

LABEL="com.pradeep.dsa-mastery.evening"
PLIST="$HOME/Library/LaunchAgents/${LABEL}.plist"
LOG_DIR="$PROJECT_ROOT/.logs"
mkdir -p "$LOG_DIR"

cat > "$PLIST" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>${LABEL}</string>

  <key>ProgramArguments</key>
  <array>
    <string>${NODE_BIN}</string>
    <string>${PROJECT_ROOT}/scripts/evening-checkin.js</string>
  </array>

  <key>WorkingDirectory</key>
  <string>${PROJECT_ROOT}</string>

  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key><integer>21</integer>
    <key>Minute</key><integer>0</integer>
  </dict>

  <key>RunAtLoad</key>
  <false/>

  <key>StandardOutPath</key>
  <string>${LOG_DIR}/evening.out.log</string>
  <key>StandardErrorPath</key>
  <string>${LOG_DIR}/evening.err.log</string>
</dict>
</plist>
PLIST

# Unload first (ignore failure if not loaded yet), then load.
launchctl bootout "gui/$(id -u)/${LABEL}" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$PLIST"

echo "✅ Installed launchd agent: ${LABEL}"
echo "   Fires daily at 21:00."
echo "   Plist:  ${PLIST}"
echo "   Logs:   ${LOG_DIR}/evening.{out,err}.log"
echo ""
echo "Test now: node scripts/evening-checkin.js"
echo "Uninstall: launchctl bootout gui/\$(id -u)/${LABEL} && rm ${PLIST}"
