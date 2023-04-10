module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite"
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.05)"
          },
          "33%": {
            transform: "translate(20px, -30px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-10px, 10px) scale(1.2)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.05)"
          },
        }
      }
    }
  }
}