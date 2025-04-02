import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontSize: {
      xs: "11px", // Default is 12px
      sm: "13px", // Default is 14px
      base: "15px", // Default is 16px
      lg: "17px", // Default is 18px
      xl: "19px", // Default is 20px
      "2xl": "23px", // Default is 24px
      "3xl": "29px", // Default is 30px
      "4xl": "35px", // Default is 36px
      "5xl": "47px", // Default is 48px
      "6xl": "59px", // Default is 60px
      "7xl": "71px", // Default is 72px
      "8xl": "95px", // Default is 96px
      "9xl": "127px", // Default is 128px
    },
    extend: {
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
    },
  },
  plugins: [
    animate,
    plugin(function ({ addUtilities }) {
      const iconGlowUtilities = {
        ".iconGlow-orange": {
          filter:
            "drop-shadow(0 0 2px rgba(220, 115, 22, 1)) drop-shadow(0 0 5px rgba(220, 115, 22, 1)) drop-shadow(0 0 10px rgba(220, 115, 22, 0.6))",
        },
      };

      addUtilities(iconGlowUtilities);
    }),
  ],
};
export default config;
