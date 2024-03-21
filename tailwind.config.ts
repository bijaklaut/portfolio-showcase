import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //    "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //    "gradient-conic":
      //       "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      keyframes: {
        moveltr: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(600px)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
      animation: {
        ltr: "moveltr 5s linear infinite forwards",
      },
      colors: {
        primary: "#9259E3",
        darkprimary: "#201232",
        darkgray: colors.gray[800],
        lightgray: colors.gray[400],
      },
    },
  },
  plugins: [],
};
export default config;
