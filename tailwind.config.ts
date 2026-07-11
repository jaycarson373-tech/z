import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        void: "#050607",
        panel: "#0b1010",
        line: "#1d2b25",
        signal: "#7cff8a",
        violet: "#8b5cf6"
      },
      fontFamily: {
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
      },
      boxShadow: {
        signal: "0 0 40px rgba(124, 255, 138, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
