import Typography from "typography"
import Bootstrap from "typography-theme-bootstrap"


Bootstrap.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      
    },
    "a":{
      color: "#ffffff",
      
      
    }
  }
}

delete Bootstrap.googleFonts

const typography = new Typography(
  {
    headerFontFamily: ['Armata', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Armata', 'serif'],
  },
  Bootstrap
)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
