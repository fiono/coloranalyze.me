import { Model } from "survey-core";
import { PlainLight } from "survey-core/themes/plain-light";
import { Survey } from "survey-react-ui";
import { surveyMetadata } from "./survey_metadata.js";
import { useState } from "react";
import { ElementFactory } from "survey-core";
import {
  ColorComparisonQuestion,
  COLOR_COMPARISON_TYPE,
} from "./ColorComparisonQuestion.jsx";

import "./survey.css";

export default function ColorSurvey({ fontName }) {
  const [imageContents, setImageContents] = useState("");

  // Register question type
  ElementFactory.Instance.registerElement(COLOR_COMPARISON_TYPE, (name) => {
    return new ColorComparisonQuestion(name);
  });

  const survey = new Model(surveyMetadata);
  survey.applyTheme(PlainLight);

  survey.css = {
    question: { title: fontName },
  };

  survey.onValueChanged.add((survey, { name, question, value }) => {
    if (name == "image_q") {
      setImageContents(value[0].content);
      console.log(`Image contents is now ${imageContents}`);

      const question1 = survey.getAllQuestions()[1];

      // dum
      question1.imageContent = imageContents;
      question1.colorA = "red";
      question1.colorB = "blue";
    }
  });

  return <Survey model={survey} />;
}
