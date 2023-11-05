import { Model } from "survey-core";
import { PlainLight } from "survey-core/themes/plain-light";
import { Survey } from "survey-react-ui";
import { surveyMetadata } from "./survey_metadata.jsx";
import "./survey.css";

export default function ColorSurvey() {
  const survey = new Model(surveyMetadata);
  survey.applyTheme(PlainLight);
  survey.css = { question: { title: "question-title" } };

  return <Survey model={survey} />;
}
