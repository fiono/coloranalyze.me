import ImageUploading from "react-images-uploading";
import { ImageListType } from "react-images-uploading";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function ImageUpload({
  images,
  onChange,
}: {
  images: ImageListType;
  onChange: (imageList: ImageListType) => void;
}) {
  const image =
    images.length > 0 ? images[0]["data_url"] : "/image_placeholder.png";

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={1}
      dataURLKey="data_url"
    >
      {({ isDragging, dragProps, onImageUpload }) => (
        <Container {...dragProps}>
          <Stack
            sx={{
              padding: 2,
              margin: 2,
              height: { xs: 300, md: 400 },
              color: "primary.main",
              border: 2,
              borderRadius: 4,
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography>Drag and drop your image here</Typography>
            <Typography>or</Typography>
            <Button variant="contained" onClick={onImageUpload}>
              {isDragging ? "Drag Image" : "Upload Image"}
            </Button>
            <Box sx={{ m: 1 }} />
            <Box
              component="img"
              src={image}
              alt="You!"
              display="block"
              sx={{ height: { xs: 130, md: 270 } }}
            />
          </Stack>
        </Container>
      )}
    </ImageUploading>
  );
}
