import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import "@fontsource/young-serif";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ['"Young Serif"', "serif"].join(","),
    },
  });

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Container>
          <Typography variant="h2">🌈 Seasonal Color Analysis</Typography>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
