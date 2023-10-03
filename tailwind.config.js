/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {
      boxShadow:{
        myShadow1: "2.1px -6px 0 0 rgb(17,24,39)",
        myShadow2: "-2.1px -6px 0 0 rgb(17,24,39)",
      }

    },
   
  },
  plugins: [],
}

