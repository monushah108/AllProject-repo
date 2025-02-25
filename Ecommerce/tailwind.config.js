/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        'layout':'repeat(auto-fill,minmax(250px,1fr))'
      },
    },
    fontFamily:{
      'nunito':['Nunito'],
      'poppins':['Poppins']
    }

  },
  plugins: [],
}

