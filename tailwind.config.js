/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: 'var(--secondary)',  // #6EC9C4
          DEFAULT: 'var(--primary)',  // #0C7C92
          dark: 'var(--accent)',      // #16284F
        },
        neutral: 'var(--neutral)',    // #f4f4f4
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}