/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00bfa6',
          hover: '#00dfc2',
          glow: 'rgba(0, 191, 166, 0.4)',
          dark: '#008a77'
        },
        accent: {
          blue: '#3b82f6',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
          amber: '#f59e0b'
        },
        dark: {
          950: '#080a0f',
          900: '#0e121b',
          850: '#131825',
          800: '#1a2234',
          700: '#253046',
          600: '#334155'
        }
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 10px rgba(0, 191, 166, 0.3))' },
          '100%': { filter: 'drop-shadow(0 0 25px rgba(0, 191, 166, 0.7))' },
        }
      }
    },
  },
  plugins: [],
};
