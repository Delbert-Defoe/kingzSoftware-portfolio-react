const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
      mono: ["Roboto Mono"],
    },

    colors: {
      accent2: "#3A3A3A",
      accent: "#c40202",
      white: "#F1F1F1",
      black: "#000005",
    },
    screens: {
      special: "380px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        bgimg: "url('img/pexels-cottonbro-5054208.jpg')",
      },
      animation: {
        "fade-up": "fadeup 500ms cubic-bezier(0,.23,0,.44)",
        "fade-in": "fadein 500ms ease-in",
      },
      keyframes: {
        fadeup: {
          "0%": {
            transform: "translatey(100px)",
            opacity: "0",
          },
          "100%": {
            transform: "translatey(0px)",
            opacity: "1",
          },
        },
        fadein: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animations: ["hover"],
      boxShadow: ["dark"],
      transform: ["hover", "group-hover"],
      display: ["group-hover"],
    },
  },
  plugins: [],
};
