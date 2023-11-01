import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";

function Header({ title }) {
  return <h1>{title} :)</h1>;
}

export default function HomePage() {
  const surveyJson = {
    elements: [
      {
        name: "FirstName",
        title: "Enter your first name:",
        type: "text",
      },
      {
        name: "LastName",
        title: "Enter your last name:",
        type: "text",
      },
    ],
  };

  const survey = new Model(surveyJson);

  return (
    <div>
      <Header title="colors 🌈" />
      <Survey model={survey} />;
    </div>
  );
}
