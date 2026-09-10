import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        jua: ["Jua", "sans-serif"],
        gowun: ['"Gowun Dodum"', "sans-serif"],
        galmuri: ["Galmuri11", "monospace"],
      },
      keyframes: {
        acSway: {
          "0%, 100%": { transform: "rotate(-1.4deg)" },
          "50%": { transform: "rotate(1.4deg)" },
        },
        acBob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      animation: {
        "ac-sway": "acSway 9s ease-in-out infinite",
        "ac-bob": "acBob 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
