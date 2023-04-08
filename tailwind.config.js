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
            transform: "translate(30px, -50px) scale(1.2)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(1.3)"
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1.05)"
          },
        }
      }
    }
  }
}