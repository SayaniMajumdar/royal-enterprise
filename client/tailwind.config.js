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
        // Handcrafted Luxury Palette
        maroon: {
          DEFAULT: '#6B1D2F',
          dark: '#541423',
          deep: '#3E0C17',
          light: '#8E2B42',
          glow: '#A8324C',
        },
        marigold: {
          DEFAULT: '#C5A059',
          dark: '#B08B44',
          light: '#E0CFA6',
          pale: '#FDF8EE',
          amber: '#F5D78E',
          border: 'rgba(197, 160, 89, 0.4)',
        },
        paper: {
          DEFAULT: '#FAF8F5',
          sand: '#F5EFE6',
          surface: '#FFFFFF',
          border: '#E8E0D5',
          card: '#FDFBF7',
        },
        // Dark Mode Obsidian & Warm Charcoal Palette
        night: {
          DEFAULT: '#141210',   // Main dark background
          surface: '#1C1917',   // Elevated card background
          card: '#231F1C',      // Sub-card background
          border: '#38312B',    // Subtle warm border
          muted: '#9E9488',     // Secondary text
          text: '#FAF8F5',      // Primary light text
          highlight: '#2A2420', // Hover background
        },
        charcoal: {
          DEFAULT: '#2B2625',
          surface: '#38312F',
          muted: '#5A524E',
          soft: '#827771',
        },
        // Compatibility aliases for clean transition
        ivory: {
          DEFAULT: '#FAF8F5',
          light: '#FFFFFF',
          surface: '#FDFBF7',
          border: '#E8E0D5',
        },
        blush: {
          DEFAULT: '#F9F1F3',
          light: '#FDF8F9',
          surface: '#FFFFFF',
          border: '#EED9DF',
        },
        roseBrand: {
          DEFAULT: '#6B1D2F',
          dark: '#541423',
          deep: '#3E0C17',
          light: '#F9F1F3',
          tint: '#FBF5F5',
          border: '#EED9DF',
        },
        gold: {
          DEFAULT: '#C5A059',
          dark: '#B08B44',
          light: '#E0CFA6',
          satin: '#B8934A',
          border: 'rgba(197, 160, 89, 0.4)',
        },
        warmgrey: {
          DEFAULT: '#5A524E',
          body: '#2B2625',
          dark: '#141210',
          light: '#827771',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Lora', 'Georgia', 'serif'],
        editorial: ['"Cormorant Garamond"', 'Lora', 'Georgia', 'serif'],
        sans: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
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
