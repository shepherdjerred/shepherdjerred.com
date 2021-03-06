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
        rstudio: "#75aadb",
        pink: colors.pink,
      },
    },
    fontFamily: {
      display: "'Avenir Next'",
      mono: "'Fira Code'",
    },
  },
  plugins: [],
};
