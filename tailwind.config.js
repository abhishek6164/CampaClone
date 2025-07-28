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
    },
  },
  plugins: [],
}
