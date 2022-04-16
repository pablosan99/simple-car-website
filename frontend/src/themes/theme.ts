import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#fefefe",
      paper: "#fafafa"
    },
    primary: {
      main: "#697ffa",
      dark: "#2d40ff",
      light: "#a3bdff"
    }
  }
})
export default theme;