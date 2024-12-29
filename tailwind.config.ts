import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
        "loop-scroll-2": "loop-scroll-2 40s linear infinite",
        "slideUp": 'slideUp 0.5s ease-out', 
        "opacity": 'opacity 1s ease-in-out',
        "spin": "spin 1.5s ease-in-out infinite", // Ajustado para ser mais lento
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0%)" },
        },
        "loop-scroll-2": {
          from: { transform: "translateX(-0%)" },
          to: { transform: "translateX(-100%)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        opacity: { 
          "0%": { 
            opacity: "0" 
          }, 
          "100%": { 
            opacity: "1" 
          } 
        },
        spin: {
          "0%": { transform: "rotate(-2deg)" }, // Inclinação inicial
          "50%": { transform: "rotate(4deg)" }, // Inclinação máxima no outro lado
          "100%": { transform: "rotate(-2deg)" }, // Retorna à posição inicial
        },
      },
      fontFamily: {
        anton: ["Anton", "sans-serif"],
        playball: ["Playball", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderWidth: {
        "3": "2.2px",
      },
      borderRadius: {
        sm: "0.3125rem",
      },
      colors: {
        background: "var(--background)",
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
        },
        black: {
          100: "var(--black-100)",
          200: "var(--black-200)",
          300: "var(--black-300)",
          400: "var(--black-400)",
          600: "var(--black-600)",
          700: "var(--black-700)",
          800: "var(--black-800)",
        },
        yellow: "var(--yellow)",
      },
      screens: {
        'ld': { min: '573px', max: '608px' }, 
      },
    },
  },
  plugins: [
  ],
} satisfies Config;
