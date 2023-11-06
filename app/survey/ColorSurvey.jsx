import { Model } from "survey-core";
import { PlainLight } from "survey-core/themes/plain-light";
import { Survey } from "survey-react-ui";
import { surveyMetadata } from "./survey_metadata.jsx";

import "./survey.css";

export default function ColorSurvey({ fontName }) {
  const survey = new Model(surveyMetadata);
  survey.applyTheme(PlainLight);

  survey.css = {
    question: { title: fontName },
  };

  return <Survey model={survey} />;
}
