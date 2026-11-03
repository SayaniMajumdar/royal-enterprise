/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Handcrafted Kolkata Palette
        maroon: {
          DEFAULT: '#6E1423',
          dark: '#540D1A',
          deep: '#3E0812',
          light: '#8B1E32',
        },
        marigold: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#F59E0B',
          pale: '#FEF3C7',
          border: 'rgba(217, 119, 6, 0.35)',
        },
        paper: {
          DEFAULT: '#FAF7F2',
          sand: '#F0ECE1',
          surface: '#FFFDF9',
          border: '#E5DED3',
          card: '#F6F2E9',
        },
        charcoal: {
          DEFAULT: '#1F1D1A',
          surface: '#292522',
          muted: '#524C44',
          soft: '#7D756A',
        },
        // Compatibility aliases for clean transition
        ivory: {
          DEFAULT: '#FAF7F2',
          light: '#FFFDF9',
          surface: '#FFFDF9',
          border: '#E5DED3',
        },
        blush: {
          DEFAULT: '#F8EFEA',
          light: '#FCF8F5',
          surface: '#FFFDF9',
          border: '#EFE2DA',
        },
        roseBrand: {
          DEFAULT: '#6E1423',
          dark: '#540D1A',
          deep: '#3E0812',
          light: '#FAF2F3',
          tint: '#FBF5F5',
          border: '#ECD0D5',
        },
        gold: {
          DEFAULT: '#D97706',
          dark: '#B45309',
          light: '#F59E0B',
          satin: '#C27803',
          border: 'rgba(217, 119, 6, 0.35)',
        },
        warmgrey: {
          DEFAULT: '#524C44',
          body: '#1F1D1A',
          dark: '#141311',
          light: '#7D756A',
        },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        editorial: ['Lora', 'Georgia', 'serif'],
        sans: ['"Hind Siliguri"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'paper-sm': '0 1px 3px rgba(31, 29, 26, 0.05), 0 1px 2px rgba(31, 29, 26, 0.03)',
        'paper-md': '0 8px 24px -6px rgba(31, 29, 26, 0.08), 0 2px 6px -2px rgba(31, 29, 26, 0.04)',
        'paper-lg': '0 16px 36px -10px rgba(31, 29, 26, 0.12), 0 4px 12px -3px rgba(31, 29, 26, 0.05)',
      },
    },
  },
  plugins: [],
};
