// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        fill: theme => ({
          'red': theme('colors.red.500'),
          'green': theme('colors.green.500'),
          'blue': theme('colors.blue.500'),
         
        })
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
        fill: ['active', 'hover', 'focus'],
      
    
      },
    },
    plugins: [],
  }
  