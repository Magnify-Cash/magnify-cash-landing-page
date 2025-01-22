import type { Config } from "tailwindcss";

export default {
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
        },
        secondary: {
          DEFAULT: "#4A4945",
        },
        accent: {
          from: "#ee9ca7",
          to: "#ffdde1",
          DEFAULT: "#ee9ca7",
        },
        background: {
          DEFAULT: "#FAFAF8",
        },
        surface: {
          DEFAULT: "#fff",
        },
        muted: {
          DEFAULT: "#6E6D67",
        },
        "muted-foreground": {
          DEFAULT: "#4A4945",
        },
        border: {
          DEFAULT: "#E6E4DD",
        },
        input: {
          DEFAULT: "#F0EFEA",
        },
        foreground: "#222222",
      },
      textColor: {
        foreground: "#222222",
      },
      fontFamily: {
        sans: ["SF Pro Display", "system-ui", "sans-serif"],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h3': ['2rem', { lineHeight: '1.4', letterSpacing: '-0.01em' }],
        'h4': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'small': ['0.875rem', { lineHeight: '1.5' }],
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