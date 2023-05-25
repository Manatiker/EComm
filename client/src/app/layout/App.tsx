import { Container, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Catalog from "../../feature/Catalog/Catalog";
import Header from "./Header";


function App() {
  let [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  function getTheme(checked: boolean) {
    setDarkMode(checked);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header sendTheme={getTheme} />
        <Container>
          <Catalog />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
