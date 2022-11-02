const colors = require("tailwindcss/colors");

// eslint-disable-next-line no-undef
module.exports = {
  theme: {
    extend: {
      colors: {
        black: colors.black,
        purple: colors.purple,
        white: colors.white,
        yellow: colors.yellow,
        posit: "#e47d3a",
        pink: colors.pink,
        orange: colors.orange,
      },
    },
    fontFamily: {
      display: "'Nunito'",
      mono: "'Fira Code'",
    },
  },
  plugins: [],
};
