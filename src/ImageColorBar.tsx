import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

export default function ImageColorBar({
  imageLocation,
  color,
}: {
  imageLocation: string;
  color: string;
}) {
  return (
    <Box display="flex" justifyContent="center">
      <Stack>
        <img src={imageLocation} width="200" />
        <Box sx={{ backgroundColor: color, height: 40, width: "inherit" }} />
      </Stack>
    </Box>
  );
}
