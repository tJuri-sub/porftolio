/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container:{
        center: true,
      },
      screens: {
        xs: "425px",
      },
       colors: {
        'primary': '#141414',
        'secondary': '#ffffff',
        'accent': '#9DA1F7',
        'accent-btn': '#D98787',
        'card': '#272727',
        'buttons': '#3E3E3E',
        'glass': '#2D2525',
      },
      fontFamily: {
        'primary': 'Outfit',
      },
      boxShadow: {
        'accent-shadow': '0px 4px 0px 0px #4B2C2C', 
      }
    },
  },
  plugins: [],
}

