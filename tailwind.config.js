/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./links/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#fdfbf7',
          dark: '#1e1e1e',
        },
        pencil: {
          DEFAULT: '#2c3e50',
          light: '#7f8c8d',
          dark: '#e0e0e0',
          'dark-light': '#a0a0a0',
        },
        marker: {
          yellow: { DEFAULT: '#fff9c4', dark: '#fbc02d' },
          pink: { DEFAULT: '#ffcdd2', dark: '#e53935' },
          green: { DEFAULT: '#c8e6c9', dark: '#43a047' },
          blue: { DEFAULT: '#bbdefb', dark: '#1e88e5' },
        },
        'line-color': '#e0e0e0',
      },
      fontFamily: {
        hand: ['"Patrick Hand"', 'cursive'],
        sans: ['"Patrick Hand"', 'cursive'], // Default to handwritten
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(#e0e0e0 1px, transparent 1px), linear-gradient(90deg, #e0e0e0 1px, transparent 1px)",
      },
      boxShadow: {
        'sketch': '2px 3px 0px 0px rgba(0,0,0,0.1)',
        'sketch-hover': '4px 5px 0px 0px rgba(0,0,0,0.2)',
      }
    },
  },
  plugins: [],
}