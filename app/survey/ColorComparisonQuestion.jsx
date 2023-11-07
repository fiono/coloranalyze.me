import { Question } from "survey-core";
import { Serializer } from "survey-core";
import { SurveyQuestionElementBase } from "survey-react-ui";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export const COLOR_COMPARISON_TYPE = "color-comparison";

export class ColorComparisonQuestion extends Question {
  getType() {
    return COLOR_COMPARISON_TYPE;
  }

  get imageContent() {
    return (
      this.getPropertyValue("imageContent") ||
      "https://cdn-icons-png.flaticon.com/512/5726/5726470.png"
    );
  }

  set imageContent(val) {
    this.setPropertyValue("imageContent", val);
  }

  get colorA() {
    return this.getPropertyValue("colorA");
  }

  set colorA(val) {
    this.setPropertyValue("colorA", val);
  }

  get colorB() {
    return this.getPropertyValue("colorB");
  }

  set colorB(val) {
    this.setPropertyValue("colorB", val);
  }
}

// Tell the serializer how to serialize the question data
Serializer.addClass(
  COLOR_COMPARISON_TYPE,
  [
    {
      name: "colorComparisonType",
      category: "general",
      visibleIndex: 2, // Place after the Name and Title
    },
  ],
  function () {
    return new ColorComparisonQuestion("");
  },
  "question"
);

// Component to render the question
export class SurveyQuestionColorComparison extends SurveyQuestionElementBase {
  constructor(props) {
    super(props);
    this.state = {
      value: this.question.value,
    };
  }

  get question() {
    return this.questionBase;
  }

  get value() {
    return this.question.value;
  }

  get type() {
    return this.question.colorComparisonType;
  }

  renderElement() {
    return (
      <Container>
        <Row>
          <Col>
            <Image src={this.question.imageContent} fluid />
          </Col>
          <Col>
            <Image src={this.question.imageContent} xs="auto" fluid />
          </Col>
        </Row>
        <p>Select the color that suits your features the best.</p>
      </Container>
    );
  }
}
