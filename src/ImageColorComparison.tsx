import * as React from "react";

import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ImageColorBar from "./ImageColorBar";

function ImageColorButton({
  imageLocation,
  color,
  handleChooseColor,
}: {
  imageLocation: string;
  color: string;
  handleChooseColor: (color: string) => void;
}) {
  return (
    <Grid item xs={1} justifyContent="center" display="flex">
      <ButtonBase onClick={() => handleChooseColor(color)}>
        <ImageColorBar imageLocation={imageLocation} color={color} />
      </ButtonBase>
    </Grid>
  );
}

export default function ImageColorComparison({
  imageLocation,
  colorA,
  colorB,
}: {
  imageLocation: string;
  colorA: string;
  colorB: string;
}) {
  const [_, setColorChoice] = React.useState<string>("");

  const handleChooseColor = function (color: string): void {
    setColorChoice(color);
    console.log("hello :)", color);
  };

  return (
    <Box textAlign="center" sx={{ p: 4 }}>
      <Grid container justifyContent="center" columns={3} spacing={2}>
        <Grid item xs={1} justifyContent="center" display="flex">
          <ImageColorButton
            imageLocation={imageLocation}
            color={colorA}
            handleChooseColor={() => handleChooseColor(colorA)}
          />
        </Grid>
        <Grid item xs={1} justifyContent="center" display="flex">
          <ImageColorButton
            imageLocation={imageLocation}
            color={colorB}
            handleChooseColor={() => handleChooseColor(colorB)}
          />
        </Grid>
      </Grid>
      <br />
      <Button variant="contained">Prev</Button>
    </Box>
  );
}
