/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'salamat-blue-lighter': '#1473E6',
        'salamat-blue-dark': '#29313C',
        'salamat-blue-light': '#6D819F',
        'salamat-blue-grey': '#5f6976',
        'salamat-black-red': '#222',
        'salamat-black': '#000',
        'salamat-black-less': '#0B071E',
        'salamat-dark-grey': '#666',
        'salamat-grey': '#999',
        'salamat-light-grey': '#CCC',
        'salamat-yellow': '#FFD553',
        'salamat-white': '#FFF',
        'salamat-less-white': '#EEE',
        'salamat-lesser-white:': '#EBEFF2',
        'salamat-orange': '#DF9727',
        'salamat-orange-light': '#F2CA8D',
        'salamat-orange-dark': '#E5AF5C',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
        sans: ['Montserrat', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

// color scheme
/**
 * {"#29313C",
 * "#222",
 * "#1473E6",
 * "#999",
 * "#FFD553",
 * "#000",
 * "#0B071E",
 * "#FFF",
 * "#CCC",
 * "#EEE",
 * "#666",
 * "#EBEFF2",
 * "#DF9727",
 * "#6D819F",
 * "#F2CA8D",
 * "#E5AF5C",
 * "#5F6976",
 */
