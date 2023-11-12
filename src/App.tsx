import * as React from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { ImageListType } from "react-images-uploading";

import ImageUpload from "./ImageUpload";
import ImageColorBar from "./ImageColorBar";

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
    },
    palette: palette,
  });
}

function App() {
  const [images, setImages] = React.useState<ImageListType>([]);
  const theme = getTheme();

  const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
  let imageColors = null;
  if (images.length > 0) {
    const image = images[0];
    const imageColorBars = colors.map((color, idx) => {
      return (
        <Grid item justifyContent="center" key={idx} xs={1}>
          <ImageColorBar imageLocation={image["data_url"]} color={color} />
        </Grid>
      );
    });
    imageColors = (
      <Grid container justifyContent="center" columns={3} spacing={2}>
        {imageColorBars}
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="lg">
          <Typography variant="h2" align="center">
            🌈 Seasonal Color Analysis 🌈
          </Typography>
          <ImageUpload
            images={images}
            onChange={(imageList: ImageListType) => {
              setImages(imageList);
            }}
          />
          {imageColors}
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
