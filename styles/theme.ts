import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff5000",
    },
    secondary: {
      main: "#f7eff0",
    },

    error: {
      main: red.A200,
    },
  },
});

export default theme;
