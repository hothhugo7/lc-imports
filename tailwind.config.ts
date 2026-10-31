import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#06080C", 900: "#090D14", 800: "#0E1520", 700: "#15202F" },
        bone: "#EEF3F8",
        // Brand blue, sampled from the client's gradient reference
        azure: { DEFAULT: "#1E7BB0", soft: "#7DBCE2", deep: "#0B3A5C", abyss: "#071F33" },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: { widest2: "0.32em" },
      keyframes: {
        marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
      },
      animation: { marquee: "marquee 38s linear infinite" },
    },
  },
  plugins: [],
};

export default config;
