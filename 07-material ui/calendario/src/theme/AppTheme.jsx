import { CssBaseline, ThemeProvider } from "@mui/material";
import { PurpleTheme } from "./Purple";
// componente que prove los estilos de material ui a la app
function AppThemeStyle({ children }) {
  return (
    <>
      <ThemeProvider theme={PurpleTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}

export default AppThemeStyle;
