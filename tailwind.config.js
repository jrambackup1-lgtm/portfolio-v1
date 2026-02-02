/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'serif-display': ['"Cormorant Garamond"', 'serif'],
        'hand': ['"Reenie Beanie"', 'cursive'],
        'mono': ['monospace'], // You might want to pick a specific mono font later
      },
      colors: {
        'paper': '#E8E4DC',
        'charcoal': '#1A1A1A',
        'ink': '#2A2A2A',
        'accent-orange': '#F97316',
        'accent-green': '#3D5A3D',
        'accent-blue': '#0000EE',
        'accent-brown': '#8B4513',
      },
      animation: {
        'slow-spin': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
