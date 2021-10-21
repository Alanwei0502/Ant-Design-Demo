module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#17173E',
      'secondary': '#6C6C84',
      'third': '#CCCCE4',
      'danger': '#E484AC',
      'safe': '#4DB08A'
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}