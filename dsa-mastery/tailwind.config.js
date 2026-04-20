/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ["'JetBrains Mono'", "'Fira Code'", "ui-monospace", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        ink: {
          950: "#0a0a1a",
          900: "#0d1117",
          800: "#111827",
          700: "#151d2b",
          600: "#1e293b",
          500: "#334155",
          400: "#475569",
          300: "#64748b",
          200: "#94a3b8",
          100: "#cbd5e1",
          50: "#e2e8f0",
        },
        accent: {
          cyan: "#22d3ee",
          purple: "#a78bfa",
          pink: "#f472b6",
          green: "#34d399",
          amber: "#fbbf24",
          red: "#f87171",
        },
      },
      animation: {
        "fade-in": "fadeIn 0.4s ease",
        "slide-up": "slideUp 0.3s ease",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
