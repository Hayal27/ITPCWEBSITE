/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',  // Full HD
        '4xl': '2560px',  // QHD / Smart MX
        '5xl': '3840px',  // 4K UHD Smart Panels
      },
    },
    extend: {
      // Brand palette using CSS variables (e.g., from global styles or :root)
      colors: {
        primary: {
          light: 'var(--secondary)',   // e.g., #6EC9C4
          default: 'var(--primary)',   // e.g., #0C7C92
          dark: 'var(--accent)',       // e.g., #16284F
        },
        neutral: 'var(--neutral)',      // e.g., #f4f4f4
        gray: {
          100: '#f7f7f7',
          200: '#e1e1e1',
          300: '#cfcfcf',
          800: '#1a1a1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Cambria', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 2px 8px rgba(0, 0, 0, 0.1)',
        dropdown: '0 4px 12px rgba(0, 0, 0, 0.15)',
        'outline-primary': '0 0 0 3px rgba(12,124,146,0.3)',
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
        fast: '150ms',
        slow: '500ms',
      },
      fontSize: {
        'fluid-base': 'clamp(1rem, 1.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.25rem, 2vw, 1.75rem)',
        'fluid-xl': 'clamp(1.5rem, 2.5vw, 2.25rem)',
        'fluid-2xl': 'clamp(2rem, 3vw, 3rem)',
      },
      screens: {
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
