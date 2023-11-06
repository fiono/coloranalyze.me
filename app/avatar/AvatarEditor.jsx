import Avatar, { genConfig } from "react-nice-avatar";
import { CirclePicker } from "react-color";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function AvatarEditor() {
  const avatarConfig = genConfig({
    sex: "woman",
    earSize: "small",
    eyeStyle: "oval",
    noseStyle: "round",
    mouthStyle: "smile",
    shirtStyle: "short",
    glassesStyle: "none",
    hatStyle: "none",
    hairStyle: "womanLong",
    eyeBrowStyle: "upWoman",
    shirtColor: "#9287FF",
    bgColor: "white",
  });

  const skinColors = ["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524"];

  return (
    <main>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Avatar
            style={{ width: "8rem", height: "8rem" }}
            {...avatarConfig}
            shape="rounded"
          />
        </Col>
        <Col xs="auto">
          <CirclePicker colors={skinColors} />
        </Col>
      </Row>
    </main>
  );
}
