module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      color: {
        'brand': '#409EFF'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
