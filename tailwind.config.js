/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#fdfbf7',
        pencil: '#2c3e50',
        'pencil-light': '#5d6d7e',
        'marker-yellow': 'rgba(255, 249, 196, 0.8)',
        'marker-pink': 'rgba(255, 205, 210, 0.8)',
        'marker-green': 'rgba(200, 230, 201, 0.8)',
        'marker-blue': 'rgba(187, 222, 251, 0.8)',
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