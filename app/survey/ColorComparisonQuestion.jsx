import { Question } from "survey-core";
import { Serializer } from "survey-core";
import { SurveyQuestionElementBase } from "survey-react-ui";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { createElement } from "react";
import { ReactQuestionFactory } from "survey-react-ui";

import { ReactSurveyElement } from "survey-react-ui";

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
      name: "colorA",
      category: "general",
    },
    {
      name: "colorB",
      category: "general",
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
  }

  get question() {
    return this.questionBase;
  }

  get value() {
    return this.question.value;
  }

  handleColorChoice(question, index) {
    question.value = index;
    return false;
  }

  renderElement() {
    return (
      <Container>
        <Row>
          <SurveyQuestionColorComparisonItem
            index={0}
            question={this.question}
            handleColorChoice={this.handleColorChoice}
          />
          <SurveyQuestionColorComparisonItem
            index={1}
            question={this.question}
            handleColorChoice={this.handleColorChoice}
          />
        </Row>
        <p>Select the color that suits your features the best.</p>
      </Container>
    );
  }
}

// Register component
ReactQuestionFactory.Instance.registerQuestion(
  COLOR_COMPARISON_TYPE,
  (props) => {
    return createElement(SurveyQuestionColorComparison, props);
  }
);

function ColorBar({ color }) {
  return <div style={{ backgroundColor: color }} className="color-bar"></div>;
}

function SurveyQuestionColorComparisonItem({
  index,
  question,
  handleColorChoice,
}) {
  return (
    <Col>
      <input id={question.getQuestionId} className="sv-hidden" />
      <a href="#" onClick={() => handleColorChoice(question, index)}>
        <Image src={question.imageContent} fluid />
        <ColorBar color={index == 0 ? question.colorA : question.colorB} />
      </a>
    </Col>
  );
}
