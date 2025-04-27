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
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        main: "url('/lake-county.webp')",
        clover: "url('/clover.svg')",
      },
      fontFamily: {
        logo: ["var(--font-logo)"],
        main: ["'Open Sans'"],
        serif: ["'DM Serif Display'"],
        stiiizy: ["'Bebas Neue'"],
      },
      colors: {
        "primary-purple": "rgb(43, 7, 77)",
        "new-years-gold": "#D9B01C",
        "new-years-black": "#090909",
      },
      animation: {
        "desktop-scroll": "desktop-scroll 30s linear infinite both",
        "mobile-scroll": "mobile-scroll 30s linear infinite both",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        text: "text 5s ease infinite",
        "fade-in": "fade-in 0.5s ease-in forwards",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("tailwindcss-motion")],
};
export default config;
