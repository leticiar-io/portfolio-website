import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        playball: ['Playball', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      borderWidth: {
        '3': '2.2px',
      },
      borderRadius: {
        'sm': '0.3125rem',
      },
      colors: {
        background: 'var(--background)',
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
        },
        black: {
          100: 'var(--black-100)',
          200: 'var(--black-200)',
          300: 'var(--black-300)',
          400: 'var(--black-400)',
          600: 'var(--black-600)',
          700: 'var(--black-700)',
          800: 'var(--black-800)',
        },
        yellow: 'var(--yellow)',
      },
    },
  },
  plugins: [],
} satisfies Config;
