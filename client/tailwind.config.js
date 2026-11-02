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
          50: '#FBF8F1',
          100: '#F6EEDC',
          200: '#ECDDBB',
          300: '#DEC692',
          400: '#D4AF37', // Classic metallic gold
          500: '#C59B46', // Royal Primary Gold
          600: '#A98132',
          700: '#8A6726',
          800: '#6B4F1F',
          900: '#4F3917',
        },
        navy: {
          800: '#141E38',
          850: '#0F172C',
          900: '#0B1120',
          950: '#060A13', // Deep Obsidian Black
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
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(212, 175, 55, 0.25)',
        'gold-glow-lg': '0 0 40px rgba(212, 175, 55, 0.35)',
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-metallic': 'linear-gradient(135deg, #FFE29F 0%, #D4AF37 50%, #9E7D23 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.2), transparent)',
        'luxury-dark': 'linear-gradient(180deg, #0B1120 0%, #060A13 100%)',
      },
    },
  },
  plugins: [],
};
