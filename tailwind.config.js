/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  plugins: [
    // ...
    require('@tailwindcss/forms'),
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height:{
        '26':'6.5rem',
      }
    },
  },
}
