// objeto de configuracion de estilos de material ui

import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const PurpleTheme = createTheme({
  palette: {
    primary: {
      main: "#7b1fa2",
    },
    secondary: {
      main: "#ff4081",
    },
    error: {
      main: red.A400,
    },
  },
});