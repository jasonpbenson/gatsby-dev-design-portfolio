import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.2,
  googleFonts: [
    { name: "Red Hat Text", styles: ["Bold"] },
    { name: "Ramabhadra", styles: ["Regular"] },
    { name: "Balthazar", styles: ["Regular"] },
  ],
  headerFontFamily: ["Red Hat Text", "sans-serif", "Ramabhadra", "sans-serif"],
  bodyFontFamily: ["Balthazar", "serif"],
  overrideStyles: (options, styles) => ({
    h1: {
      fontStyle: "italic",
    },
    h2: {
      fontFamily: ["Ramabhadra", "sans-serif"].join(","),
    },
    h3: {
      fontFamily: ["Ramabhadra", "sans-serif"].join(","),
    },
    h4: {
      fontFamily: ["Ramabhadra", "sans-serif"].join(","),
    },
  }),
})

export default typography
