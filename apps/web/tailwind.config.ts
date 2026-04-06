import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfeff",
          500: "#0ea5a4",
          700: "#0f766e",
          900: "#134e4a",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
