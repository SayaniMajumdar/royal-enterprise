/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FAF7F0',
          100: '#F5EEDD',
          200: '#EBDEBD',
          300: '#DEC692',
          400: '#C5A059', // Refined Antique Gold (White Tie & Evexa style)
          500: '#B89045', // Primary Royal Gold
          600: '#9E7632',
          700: '#825E25',
          800: '#66481A',
          900: '#4A3311',
        },
        navy: {
          800: '#141D2E',
          850: '#0F1624',
          900: '#0A0F1A',
          950: '#060A13', // Obsidian Midnight
        },
        wine: {
          800: '#4E0C17',
          900: '#380710',
          950: '#26040A', // Deep Royal Imperial Wine
        },
        cream: {
          50: '#FAF8F4',
          100: '#F5F0E8',
          200: '#EDE4D5',
          300: '#E2D5BF',
          800: '#2C2720',
          900: '#1E1A14',
        },
        ivory: {
          50: '#FDFCFA',
          100: '#F9F7F2',
          200: '#F2EDE2',
          300: '#E8E0D0',
          400: '#D9CDB8',
        },
      },
      fontFamily: {
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
        'luxury': '0 20px 45px -15px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(197, 160, 89, 0.1)',
        'card': '0 8px 30px -8px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.03)',
        'card-hover': '0 16px 36px -10px rgba(0, 0, 0, 0.75), 0 0 1px 1px rgba(197, 160, 89, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-metallic': 'linear-gradient(135deg, #FBF6E9 0%, #C5A059 45%, #A8813B 80%, #7E5D23 100%)',
        'gold-satin': 'linear-gradient(180deg, #C5A059 0%, #B0883E 100%)',
        'luxury-dark': 'linear-gradient(180deg, #0A0F1A 0%, #060A13 100%)',
      },
    },
  },
  plugins: [],
};
