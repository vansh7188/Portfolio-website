import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#07090d",
          900: "#0b1118",
          850: "#101720",
          800: "#141e29"
        },
        accent: {
          400: "#78d6ff",
          500: "#3eb7f5",
          600: "#1286c6"
        },
        steel: {
          100: "#d7dde4",
          200: "#bac5d0",
          300: "#95a5b6",
          400: "#6b7d90"
        }
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(120,214,255,0.2), 0 16px 40px rgba(16, 76, 112, 0.35)",
        card: "0 20px 70px rgba(0, 0, 0, 0.4)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)"
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        pulseSlow: "pulseSlow 8s ease-in-out infinite",
        drift: "drift 18s linear infinite",
        marquee: "marquee 20s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.75", transform: "scale(1.06)" }
        },
        drift: {
          "0%": { transform: "translateX(-10%)" },
          "50%": { transform: "translateX(10%)" },
          "100%": { transform: "translateX(-10%)" }
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: [forms]
};
