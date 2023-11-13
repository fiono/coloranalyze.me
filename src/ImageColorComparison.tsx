import * as React from "react";

import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

function ImageColorItem({
  imageLocation,
  color,
  handleChooseColor,
}: {
  imageLocation: string;
  color: string;
  handleChooseColor: (color: string) => void;
}) {
  return (
    <Grid item xs={12} md={4} justifyContent="center" display="flex">
      <ButtonBase onClick={() => handleChooseColor(color)}>
        <Box display="flex" justifyContent="center">
          <Stack>
            <Box
              component="img"
              src={imageLocation}
              sx={{ width: "100%", maxHeight: { xs: 300, md: 500 } }}
            />
            <Box sx={{ backgroundColor: color, height: 40, width: "100%" }} />
          </Stack>
        </Box>
      </ButtonBase>
    </Grid>
  );
}

function ImageColorGrid({
  colorA,
  colorB,
  colorC,
  imageLocation,
  handleChooseColor,
}: {
  colorA: string;
  colorB: string;
  colorC: string;
  imageLocation: string;
  handleChooseColor: (color: string) => void;
}): JSX.Element {
  return (
    <Grid container justifyContent="center" spacing={2}>
      <ImageColorItem
        imageLocation={imageLocation}
        color={colorA}
        handleChooseColor={() => handleChooseColor(colorA)}
      />
      <ImageColorItem
        imageLocation={imageLocation}
        color={colorB}
        handleChooseColor={() => handleChooseColor(colorB)}
      />
      <ImageColorItem
        imageLocation={imageLocation}
        color={colorC}
        handleChooseColor={() => handleChooseColor(colorC)}
      />
    </Grid>
  );
}

export default function ImageColorComparison({
  imageLocation,
}: {
  imageLocation: string;
}) {
  const [_, setColorChoice] = React.useState<string>("");

  const handleChooseColor = function (color: string): void {
    setColorChoice(color);
    console.log("hello :)", color);
  };

  return (
    <Box textAlign="center" sx={{ p: 4 }}>
      <Typography align="center">
        Pick the color that makes your features pop.
      </Typography>
      <Box sx={{ m: 2 }} />
      <ImageColorGrid
        colorA="red"
        colorB="yellow"
        colorC="blue"
        imageLocation={imageLocation}
        handleChooseColor={handleChooseColor}
      />
    </Box>
  );
}
