import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "delta-blue": "#003A70", // primary nav/header blue
        "delta-blue-dark": "#002654", // hover/active blue
        "delta-blue-light": "#E8F0FB", // light blue backgrounds
        "delta-red": "#C8102E", // CTA buttons, logo triangle
        "delta-red-dark": "#A50D25", // hover red
        "delta-gray": "#F5F6F8", // page background sections
        "delta-text": "#1A1A1A", // body text
        "delta-muted": "#6B7280", // subtext / labels
        "delta-border": "#DDE3EF", // input borders
      },
      fontFamily: {
        // Delta uses a custom "Publico" / "Source Sans" stack
        sans: ["Source Sans 3", "Arial", "sans-serif"],
        display: ["Georgia", "serif"],
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
