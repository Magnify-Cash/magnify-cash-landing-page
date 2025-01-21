import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#141413",
          dark: "#0F1115",
        },
        secondary: {
          DEFAULT: "#828179",
          dark: "#9BA1A6",
        },
        accent: "#C7FB76",
        background: {
          DEFAULT: "#FAFAF8",
          dark: "#111111",
        },
        surface: {
          DEFAULT: "#fff",
          dark: "#1A1A1A",
        },
        muted: {
          DEFAULT: "#C4C3BB",
          dark: "#2A2A2A",
        },
        "muted-foreground": {
          DEFAULT: "#A3A299",
          dark: "#888888",
        },
        border: {
          DEFAULT: "#E6E4DD",
          dark: "#222222",
        },
        input: {
          DEFAULT: "#F0EFEA",
          dark: "#1A1A1A",
        },
        foreground: "hsl(var(--foreground))",
      },
      textColor: {
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 6s ease-in-out infinite",
        "bounce": "bounce 1s infinite",
        "pulse": "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;