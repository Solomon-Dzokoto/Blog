/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{tsx,tx,js,jsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '576px', // => @media (min-width: 576px) { ... }
      },
    },
  },
  plugins: [],
}

