/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,jsx}",
      "./pages/**/*.{js,jsx}",
      "./components/**/*.{js,jsx}",
      "./styles/**/*.{css}",
    ],
    theme: {
      extend: {
        fontFamily: {
          shermlock: ['Sermlock', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }