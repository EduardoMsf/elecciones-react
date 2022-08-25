import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: '#262254'
    },
    seconday: {
      main: '#D93691'
    },
    success: {
      main: '#2E7D32'
    },
    error: {
      main: red.A400
    },
    black: {
      main: '#1B1B1B'
    },
    white: {
      main: '#FFFFFF'
    }
  }
})