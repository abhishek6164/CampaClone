/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Interregular', 'sans-serif'],
        jio: ['JioType', 'sans-serif'],
        logik: ['LogiKWide', 'sans-serif'],
        sign: ['SignPainter', 'cursive'],
        noto: ["'Noto Serif'", "serif"],
        devanagari: ["'Noto Serif Devanagari'", "serif"],
        bengali: ["'Noto Serif Bengali'", "serif"],
        gujarati: ["'Noto Serif Gujarati'", "serif"],
        tamil: ["'Noto Serif Tamil'", "serif"],
        telugu: ["'Noto Serif Telugu'", "serif"],
        kannada: ["'Noto Serif Kannada'", "serif"],
        malayalam: ["'Noto Serif Malayalam'", "serif"],
        urdu: ["'Noto Naskh Arabic'", "serif"],
      },
      keyframes: {
        float: {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        fadeInZoom: 'fadeInZoom 1.2s ease-out forwards',
      },
       colors: {
        milk: "#faeade",
        "dark-brown": "#523122",
        "mid-brown": "#a26833",
        "light-brown": "#e3a458",
        "red-brown": "#7f3b2d",
        "yellow-brown": "#a26833",
        red: "#a02128",
        black: "#222123",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
}