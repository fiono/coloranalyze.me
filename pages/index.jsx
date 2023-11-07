import Container from "react-bootstrap/Container";
import { useState } from "react";
import Row from "react-bootstrap/Row";
import { Young_Serif } from "next/font/google";

import ColorSurvey from "../app/survey/ColorSurvey.jsx";
import AvatarEditor from "../app/avatar/AvatarEditor.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "survey-core/defaultV2.min.css";

const font = Young_Serif({
  weight: "400",
  subsets: ["latin"],
});

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>Remove</button>
        </div>
      )}

      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default function HomePage() {
  const title = "💐🍉 Seasonal Color Analysis 🍁❄️";

  return (
    <main className={font.className}>
      <UploadAndDisplayImage />
      <Container>
        <Row className="text-center">
          <h1>{title}</h1>
        </Row>

        <Row>
          <ColorSurvey fontName={font.className} />
        </Row>
      </Container>
    </main>
  );
}
