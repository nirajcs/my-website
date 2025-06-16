/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html","./src/**/*.{html,jsx,}"
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#000000",
        textColor: "#2a2a2a"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }      
    },
  },
  plugins: [],
}

