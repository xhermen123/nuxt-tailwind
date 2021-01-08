const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#335EEA',
        'gray-600': '#506690',
        'gray-700': '#6B7C93',
        'gray-900': '#161B2D'
      },
      zIndex: {
        '-1': '-1',
      }
    }
  }
}