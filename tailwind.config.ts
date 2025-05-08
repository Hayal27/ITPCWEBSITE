export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C7C92",
          light: "#6EC9C4",
          dark: "#16284F",
        },
        background: "#f4f4f4",
        foreground: "#000000",
        navbar: "#E5E5E5",
        footer: "#E5E5E5",
      },
      fontFamily: {
        primary: ['"OOOK"', 'sans-serif'],
        secondary: ['"Roboto"', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, #0C7C92, #6EC9C4)",
        "gradient-to-r-alt": "linear-gradient(to right, #0C7C92, #16284F)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};