/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-400%)" },
        }
      },
      animation: {
        "loop-scroll": "loop-scroll 10s linear infinite",
      },
    },
  },
  plugins: [],
}
