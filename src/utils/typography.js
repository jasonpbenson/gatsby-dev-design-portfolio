import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 0.75,
  googleFonts: [
    { name: "Red Hat Text", styles: ["Regular", "Bold", "Bold Italic"] },
    { name: "Ramabhadra", styles: ["Regular"] },
    { name: "Balthazar", style: "Regular" },
  ],
  headerFontFamily: ["Red Hat Text", "sans-serif", "Ramabhadra", "sans-serif"],
  bodyFontFamily: ["Balthazar", "serif"],
})

export default typography
