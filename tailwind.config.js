/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        cyan:{
          500:'#35D0BA',
          600:'#2F9E89'
        }
      },
      minHeight: {
        '64': '16rem',
      },
      fontFamily: {
        'nunito': ['nunito', 'sans-serif']
      },
      height: {
        '100':"35rem"
      },
      width: {
        '100':'35rem'
      }
    },
  },
  plugins: [],
}
