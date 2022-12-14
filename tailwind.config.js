/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.html"],
  theme: {
    extend: {
      fontSize: {
        "h1": '3rem',
        "h3": '1.2rem',
      }
    },
  },
  plugins: [],
}