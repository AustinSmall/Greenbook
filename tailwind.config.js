const { url } = require("inspector");

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage:{
          'vintage': "url('../public/vintage.jpeg')"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }