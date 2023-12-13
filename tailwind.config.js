/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "rgba(174, 174, 174, 1)",
        green1: "rgba(142, 255, 139, 0.5)",
        green2: "rgba(142, 255, 139, 1)",
        green3: "rgba(6, 34, 38, 1)"
      },
      fontFamily:{
        firaCode: ["Fira Code", "monospace"]
      }, 
    },
  },
  plugins: [],
}

