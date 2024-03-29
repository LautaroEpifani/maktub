/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        blueMar: "#002D62",
        woods: "#1E4D2B",
        gold: "#A67C00"
      },
      fontFamily: {
        'dancing-script': ['Dancing Script', 'cursive'],
        'ephesis': ['Ephesis', 'cursive'],
        'noto': ['Noto Sans Linear B', 'sans-serif'],
     
      },
      fontSize: {
        '9xl': '9rem',   
        '10xl': '10rem', 
      },
      screens: {
        '3xl': '1700px',
        '4xl': '1920px', 
        '5xl': '2560px',
      },
    },
  },
  plugins: [],
}
