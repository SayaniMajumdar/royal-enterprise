/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#F6F3EE',
          light: '#FAF8F4',
          surface: '#FFFDF9',
          border: '#E8E1D5',
        },
        blush: {
          DEFAULT: '#F6E4E1',
          light: '#FAF0EE',
          surface: '#FDF7F6',
          border: '#ECD6D2',
        },
        maroon: {
          DEFAULT: '#6E1423',
          dark: '#540D1A',
          deep: '#3A0610',
          light: '#851C2D',
        },
        gold: {
          DEFAULT: '#B8934A',
          dark: '#8A6A2C', // AA compliant on ivory
          light: '#E2C27D', // on maroon/charcoal
          satin: '#C5A059',
          border: 'rgba(184, 147, 74, 0.35)',
        },
        charcoal: {
          DEFAULT: '#141414',
          surface: '#1C1C1C',
          muted: '#2A2A2A',
        },
        warmgrey: {
          DEFAULT: '#6B645C',
          body: '#3A352F',
          dark: '#26221D',
          light: '#9E968D',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Playfair Display', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Jost', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'theevexa': '0 30px 60px -30px rgba(0, 0, 0, 0.25)',
        'theevexa-soft': '0 12px 35px -10px rgba(40, 25, 20, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(110, 20, 35, 0.12), 0 0 1px 1px rgba(184, 147, 74, 0.25)',
      },
      backgroundImage: {
        'gold-btn': 'linear-gradient(135deg, #D4B36A 0%, #A67C32 100%)',
        'maroon-btn': 'linear-gradient(135deg, #6E1423 0%, #540D1A 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(10,6,4,0.55) 0%, rgba(10,6,4,0.35) 40%, rgba(10,6,4,0.92) 100%)',
      },
    },
  },
  plugins: [],
};
