import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4.5s ease-in-out infinite",
        "float-fast": "float 3.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
