import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: "#556cd6",
      dark: "#19857b"
    },
    secondary: {
      main: "#19857b"
    },
    error: {
      main: red.A400
    }
  }
});

export default theme;
