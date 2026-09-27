import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0E2A47",
          dark: "#071726",
          light: "#16406A",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E2C568",
          dark: "#96781D",
        },
        surface: "var(--surface)",
        card: "var(--card)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        edge: "var(--edge)",
        chip: "var(--chip)",
      },
      fontFamily: {
        latin: ["var(--font-latin)", "sans-serif"],
        arabic: ["var(--font-arabic)", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  plugins: [],
};

export default config;
