import Container from "react-bootstrap/Container";
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

export default function HomePage() {
  const title = "💐🍉 Seasonal Color Analysis 🍁❄️";

  return (
    <main className={font.className}>
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
