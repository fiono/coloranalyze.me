import { Model } from "survey-core";
import { PlainLight } from "survey-core/themes/plain-light";
import { Survey } from "survey-react-ui";
import { surveyMetadata } from "./survey_metadata.js";
import { useState } from "react";
import { createElement } from "react";
import { ElementFactory } from "survey-core";
import { ReactQuestionFactory } from "survey-react-ui";
import {
  ColorComparisonQuestion,
  SurveyQuestionColorComparison,
  COLOR_COMPARISON_TYPE,
} from "./ColorComparisonQuestion.jsx";

import "./survey.css";

export default function ColorSurvey({ fontName }) {
  const [imageContents, setImageContents] = useState("");

  // Register question type
  ElementFactory.Instance.registerElement(COLOR_COMPARISON_TYPE, (name) => {
    return new ColorComparisonQuestion(name);
  });

  // Register component
  ReactQuestionFactory.Instance.registerQuestion(
    COLOR_COMPARISON_TYPE,
    (props) => {
      return createElement(SurveyQuestionColorComparison, props);
    }
  );

  const survey = new Model(surveyMetadata);
  survey.applyTheme(PlainLight);

  survey.css = {
    question: { title: fontName },
  };

  survey.onValueChanged.add((survey, { name, question, value }) => {
    if (name == "image_q") {
      setImageContents(value[0].content);
      console.log(`Setting imageContents`);
      console.log(`Image contents is now ${imageContents}`);
      console.log((survey.getAllQuestions()[1].imageContent = imageContents));
    }
  });

  return <Survey model={survey} />;
}
