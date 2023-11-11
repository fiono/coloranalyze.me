import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ImageUpload from "./ImageUpload";

import "@fontsource/young-serif";

function App() {
  const palette = {
    primary: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  };

  const theme = createTheme({
    typography: {
      fontFamily: ['"Young Serif"', "serif"].join(","),
    },
    palette: palette,
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            🌈 Seasonal Color Analysis
          </Typography>
          <ImageUpload palette={palette} />
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
