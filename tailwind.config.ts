import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url('/lake-county.webp')",
      },
      fontFamily: {
        logo: ["var(--font-logo)"],
        main: ["'Open Sans'"],
      },
      colors: {
        "primary-purple": "rgb(43, 7, 77)",
      },
      animation: {
        "desktop-scroll": "desktop-scroll 30s linear infinite both",
        "mobile-scroll": "mobile-scroll 30s linear infinite both",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
