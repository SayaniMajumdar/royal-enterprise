/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Contemporary Indian Celebration Studio Palette
        wine: {
          DEFAULT: '#401D2C', // Deep Wine primary contrast
          dark: '#2A101C',
          deep: '#1F0B14',
          light: '#5C283F',
          soft: '#F4ECEF',
          border: 'rgba(64, 29, 44, 0.25)',
        },
        terracotta: {
          DEFAULT: '#D65B43', // Celebratory Terracotta
          dark: '#B84630',
          light: '#E2745E',
          soft: '#FDF1EE',
          border: 'rgba(214, 91, 67, 0.3)',
        },
        brass: {
          DEFAULT: '#C49A53', // Muted Brass / Antique Gold
          dark: '#A8813D',
          light: '#E2CCA1',
          pale: '#FDF8EE',
          border: 'rgba(196, 154, 83, 0.35)',
        },
        botanical: {
          DEFAULT: '#526C55', // Botanical Green
          dark: '#3D5240',
          light: '#6D8B71',
          soft: '#EFF4F0',
        },
        ivory: {
          DEFAULT: '#F6F0E7', // Warm Ivory primary canvas
          pure: '#FFFFFF',
          surface: '#FAF7F2',
          border: '#E8DFD3',
          card: '#FAF6F0',
        },
        charcoal: {
          DEFAULT: '#292323', // Primary Dark Charcoal text
          muted: '#665C5C',   // Secondary body text
          soft: '#8C8282',    // Subtle metadata
          surface: '#362E2E',
        },

        // Backward compatibility mappings
        maroon: {
          DEFAULT: '#401D2C',
          dark: '#2A101C',
          deep: '#1F0B14',
          light: '#5C283F',
          glow: '#D65B43',
        },
        marigold: {
          DEFAULT: '#C49A53',
          dark: '#A8813D',
          light: '#E2CCA1',
          pale: '#FDF8EE',
          amber: '#E8B359',
          border: 'rgba(196, 154, 83, 0.35)',
        },
        paper: {
          DEFAULT: '#F6F0E7',
          sand: '#EFE7DA',
          surface: '#FFFFFF',
          border: '#E8DFD3',
          card: '#FAF6F0',
        },
        night: {
          DEFAULT: '#191316',
          surface: '#231B1F',
          card: '#2D2328',
          border: '#3F3238',
          muted: '#9E9488',
          text: '#F6F0E7',
          highlight: '#3A2E34',
        },
        blush: {
          DEFAULT: '#F4ECEF',
          light: '#FAF5F7',
          surface: '#FFFFFF',
          border: '#EADCE1',
        },
        roseBrand: {
          DEFAULT: '#401D2C',
          dark: '#2A101C',
          deep: '#1F0B14',
          light: '#F4ECEF',
          tint: '#FAF5F7',
          border: '#EADCE1',
        },
        gold: {
          DEFAULT: '#C49A53',
          dark: '#A8813D',
          light: '#E2CCA1',
          satin: '#B58D47',
          border: 'rgba(196, 154, 83, 0.35)',
        },
        warmgrey: {
          DEFAULT: '#665C5C',
          body: '#292323',
          dark: '#191316',
          light: '#8C8282',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Manrope', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'paper-sm': '0 1px 3px rgba(31, 29, 26, 0.05), 0 1px 2px rgba(31, 29, 26, 0.03)',
        'paper-md': '0 8px 24px -6px rgba(31, 29, 26, 0.08), 0 2px 6px -2px rgba(31, 29, 26, 0.04)',
        'paper-lg': '0 16px 36px -10px rgba(31, 29, 26, 0.12), 0 4px 12px -3px rgba(31, 29, 26, 0.05)',
        'dark-card': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 1px 2px rgba(255, 255, 255, 0.04)',
      },
    },
  },
  plugins: [],
};
