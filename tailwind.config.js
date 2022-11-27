/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./proyecto.html"],
  theme: {
    extend: {
      fontSize: {
        "h1": '2rem',
        "h3": '1.2rem',
      }
    },
  },
  plugins: [],
}