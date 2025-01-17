import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        "custom-dark": "0 0 8px rgba(0, 0, 0, 0.5)", // 50% opacity drop shadow large, with shadow all around
      },
    },
  },
  plugins: [],
} satisfies Config;
