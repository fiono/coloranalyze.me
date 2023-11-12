import * as React from "react";

import ImageUploading from "react-images-uploading";
import { ImageListType } from "react-images-uploading";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function ImagePreview({ imageLocation }: { imageLocation: string }) {
  return <img src={imageLocation} alt="" height="250" />;
}

export default function ImageUpload({}) {
  const [images, setImages] = React.useState<ImageListType>([]);

  const onChange = (imageList: ImageListType) => {
    console.log(imageList);
    setImages(imageList);
  };

  const image =
    images.length > 0 ? images[0]["data_url"] : "/image_placeholder.png";
  const imageElement = <ImagePreview imageLocation={image} />;

  return (
    <ImageUploading
      value={images}
      onChange={onChange}
      maxNumber={1}
      dataURLKey="data_url"
    >
      {({ isDragging, dragProps, onImageUpload }) => (
        <Container {...dragProps}>
          <Box
            textAlign="center"
            sx={{
              m: 10,
              p: 5,
              w: 100,
              h: 40,
              color: "primary.main",
              border: 2,
              borderRadius: 4,
            }}
          >
            <Button variant="contained" onClick={onImageUpload}>
              {isDragging ? "Drag Image" : "Upload Image"}
            </Button>
            <Box sx={{ m: 2 }}>{imageElement}</Box>
          </Box>
        </Container>
      )}
    </ImageUploading>
  );
}
