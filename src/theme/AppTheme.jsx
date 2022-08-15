import { ThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { blueTheme } from "./"

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={ blueTheme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}
