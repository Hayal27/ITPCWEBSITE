/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    // wrap your app in a centered container with responsive gutters
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm:      '2rem',
        lg:      '4rem',
        xl:      '5rem',
      },
    },
    extend: {
      // brand palette inspired by modern corporate UI (Facebook, LinkedIn, etc.)
      colors: {
        primary: {
          light: 'var(--secondary)',  // #6EC9C4
          default: 'var(--primary)',  // #0C7C92
          dark: 'var(--accent)',      // #16284F
        },
        neutral: 'var(--neutral)',    // #f4f4f4
        gray: {
          100: '#f7f7f7',
          200: '#e1e1e1',
          300: '#cfcfcf',
          800: '#1a1a1a',
        },
      },
      // smooth, friendly typography
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif:['Cambria','Georgia','serif'],
      },
      // subtle shadows for cards, dialogs, buttons
      boxShadow: {
        card:          '0 2px 8px rgba(0, 0, 0, 0.1)',
        dropdown:      '0 4px 12px rgba(0, 0, 0, 0.15)',
        'outline-primary': '0 0 0 3px rgba(12,124,146,0.3)',
      },
      // consistent rounded corners
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      // polished motion defaults
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        fast:    '150ms',
        slow:    '500ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),       // form resets & strategy
    require('@tailwindcss/typography'),  // rich text styling
  ],
}