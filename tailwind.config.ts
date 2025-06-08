import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      xs: "11px",
      sm: "13px",
      base: "15px",
      lg: "17px",
      xl: "19px",
      "2xl": "23px",
      "3xl": "29px",
      "4xl": "35px",
      "5xl": "47px",
      "6xl": "59px",
      "7xl": "71px",
      "8xl": "95px",
      "9xl": "127px",
    },
    extend: {
      keyframes: {
        "flame-flicker": {
          "0%": {
            filter: "brightness(1.1)",
            transform: "scaleY(1) rotate(0deg)",
            opacity: "0.95",
          },
          "10%": {
            filter: "brightness(1.05)",
            transform: "scaleY(1.02) rotate(2deg)",
            transformOrigin: "0% 50%",
            opacity: "1",
          },
          "20%": {
            filter: "brightness(1)",
            transform: "scaleY(1) rotate(1deg)",
            transformOrigin: "100% 50%",
            opacity: "0.9",
          },
          "30%": {
            filter: "brightness(1)",
            transform: "scaleY(1.05) rotate(0deg)",
            transformOrigin: "0% 50%",
            opacity: "1",
          },
          "40%": {
            filter: "brightness(0.8)",
            transform: "scaleY(1) rotate(-1deg)",
            transformOrigin: "0% 50%",
            opacity: "1",
          },
          "50%": {
            filter: "brightness(1)",
            transform: "scaleY(1.03) rotate(1deg)",
            transformOrigin: "0% 50%",
            opacity: "1",
          },
          "55%": {
            filter: "brightness(1)",
            transform: "scaleY(1) rotate(-1deg)",
            transformOrigin: "0% 50%",
            opacity: "0.9",
          },
          "60%": {
            filter: "brightness(1.03)",
            transform: "scaleY(1) rotate(-1deg)",
            transformOrigin: "0% 50%",
            opacity: "0.9",
          },
          "70%": {
            filter: "brightness(1.05)",
            transform: "scaleY(1.01) rotate(0deg)",
            transformOrigin: "0% 50%",
            opacity: "1",
          },
          "80%": {
            filter: "brightness(1.1)",
            transform: "scaleY(1.05) rotate(-1deg)",
            transformOrigin: "0% 50%",
            opacity: "1",
          },
          "90%": {
            filter: "brightness(1.2)",
            transform: "scaleY(1.1) rotate(-1deg)",
            transformOrigin: "0% 70%",
            opacity: "1",
          },
          "100%": {
            filter: "brightness(1.1)",
            transform: "scaleY(1) rotate(0deg)",
            opacity: "0.95",
          },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },

      animation: {
        "flame-flicker": "flame-flicker 1.2s ease-out infinite",
        "accordion-down": "accordion-down 0.16s ease",
        "accordion-up": "accordion-up 0.16s ease",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        text: "hsl(var(--text))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "tooltip-b":
          "8px 10px 10px -13px rgba(255,255,255,1), -8px 9px 10px -13px rgba(255,255,255,1), 0px 23px 40px -10px rgba(255,255,255,1)",
        "tooltip-t":
          "8px -10px 10px -13px rgba(255,255,255,1), -8px -9px 10px -13px rgba(255,255,255,1), 0px -23px 40px -10px rgba(255,255,255,1)",
        "tooltip-r": "-12px 0px 12px -10px rgba(255,255,255,1)",
        "tooltip-l": "12px 0px 12px -10px rgba(255,255,255,1)",
      },
      dropShadow: {
        orange: "0 0 5px rgba(249, 115, 22, 0.8)",
      },
      spacing: {
        site: "78%",
      },
    },
  },
  plugins: [
    animate,
    plugin(function ({ addUtilities }) {
      const iconGlowUtilities = {
        ".iconGlow-orange": {
          filter:
            "drop-shadow(-2px -5px 10px rgba(255, 100, 100, 1)) drop-shadow(2px 5px 5px rgba(50, 220, 50, 0.4)) drop-shadow(2px 2px 1px black)",
        },
      };

      addUtilities(iconGlowUtilities);
    }),
  ],
};
export default config;
