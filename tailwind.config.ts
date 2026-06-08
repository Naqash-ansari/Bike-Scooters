import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e11d2e",
          dark: "#090909",
          graphite: "#151515",
          steel: "#262626"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial", "sans-serif"],
        body: ["var(--font-body)", "Arial", "sans-serif"]
      },
      boxShadow: {
        red: "0 18px 50px rgba(225, 29, 46, 0.22)"
      }
    }
  },
  plugins: []
};

export default config;
