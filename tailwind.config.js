/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
  ],
  theme: {
    fontFamily:{
      'sans':['ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'],
      'serif':['ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'],
      'mono':['ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'],
      'custom':['"Poppins"','"Open Sans"','"Merriweather"'],
    },
    extend: {},
  },
  plugins: [],
}
