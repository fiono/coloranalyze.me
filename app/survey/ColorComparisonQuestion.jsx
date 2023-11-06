import { Question } from "survey-core";
import { Serializer } from "survey-core";
import { SurveyQuestionElementBase } from "survey-react-ui";

export const CUSTOM_TYPE = "color-comparison";

export class ColorComparisonQuestion extends Question {
  getType() {
    return CUSTOM_TYPE;
  }

  get imageContent() {
    return this.getPropertyValue("imageContent"); //or "https://cdn-icons-png.flaticon.com/512/5726/5726470.png";
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
  CUSTOM_TYPE,
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
      <div>
        <img src={this.question.imageContent}></img>
        <img src={this.question.imageContent}></img>
        <p>hello!! 🌈</p>
      </div>
    );
  }
}
