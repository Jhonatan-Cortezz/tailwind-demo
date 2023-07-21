/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {    
    fontFamily: {
      poppins: ['Poppins'],
      pacifico: ['Pacifico']
    },
    extend: {
      colors: {
        'gray-header': '#F1F3F8',
        'light-blue': '#0EA5E9',
        'dark-blue': '#6366F1',
        'gray-text': '#706E6E'
      },
    },
  },
  plugins: [],
}

