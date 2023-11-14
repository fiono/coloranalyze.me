import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { ImageListType } from "react-images-uploading";

import ImageUpload from "./ImageUpload";
import ImageColorComparison from "./ImageColorComparison";
import { MetaSeason } from "./ColorSeason";

import "@fontsource/young-serif";

function getTheme() {
  const palette = {
    primary: {
      main: "#E3D026",
      light: "#E9DB5D",
      dark: "#A29415",
      contrastText: "#242105",
    },
  };

  return createTheme({
    typography: {
      fontFamily: ['"Young Serif"', "serif"].join(","),
      h3: {
        fontSize: "1.2rem",
        "@media (min-width:800px)": {
          fontSize: "3rem",
        },
      },
    },
    palette: palette,
  });
}

function App() {
  const [images, setImages] = React.useState<ImageListType>([]);
  const hasImage = images.length > 0;

  const theme = getTheme();

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg" sx={{ p: 1 }}>
          <Typography variant="h3" align="center">
            🌈 Seasonal Color Analysis 🌈
          </Typography>
          {hasImage || (
            <ImageUpload
              images={images}
              onChange={(imageList: ImageListType) => {
                setImages(imageList);
              }}
            />
          )}
          {hasImage && (
            <ImageColorComparison
              imageLocation={images[0]["data_url"]}
              metaSeason={MetaSeason.Spring}
            />
          )}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
