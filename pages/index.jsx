import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { PlainLight } from "survey-core/themes/plain-light";
import Avatar, { genConfig } from "react-nice-avatar";
import { CirclePicker } from "react-color";

import "bootstrap/dist/css/bootstrap.css";
import "survey-core/defaultV2.min.css";

function Header({ title }) {
  return <h1>{title} :)</h1>;
}

export default function HomePage() {
  const avatarConfig = genConfig({
    sex: "woman",
    earSize: "small",
    eyeStyle: "oval",
    noseStyle: "round",
    mouthStyle: "smile",
    shirtStyle: "short",
    glassesStyle: "none",
    hairStyle: "womanLong",
    eyeBrowStyle: "upWoman",
    shirtColor: "#9287FF",
    bgColor: "white",
  });

  const skinColors = ["#ffdbac", "#f1c27d", "#e0ac69", "#c68642", "#8d5524"];

  const surveyJson = {
    elements: [
      {
        type: "imagepicker",
        name: "silver_gold",
        title: "Do you look better in silver or gold jewelry?",
        isRequired: true,
        choices: [
          {
            value: "Gold",
            imageLink:
              "https://imgs.michaels.com/MAM/assets/1/5E3C12034D34434F8A9BAAFDDF0F8E1B/img/AAAC1BBAFB974289B3CFDF664F399FB7/10540020_30.jpg?fit=inside|1280:1280",
          },
          {
            value: "Silver",
            imageLink:
              "https://static.vecteezy.com/system/resources/thumbnails/016/070/541/small/silver-texture-aluminum-web-background-template-vector.jpg",
          },
          {
            value: "Not sure",
            imageLink:
              "https://images.unsplash.com/photo-1624365168987-9b8c0ff8333f?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMHNpbHZlcnxlbnwwfHwwfHx8MA%3D%3D",
          },
        ],
        imageFit: "cover",
      },
    ],
  };

  const survey = new Model(surveyJson);
  survey.applyTheme(PlainLight);

  return (
    <div>
      <Header title="Seasonal Color Analysis 🌈" />
      <div>
        <Avatar
          style={{ width: "8rem", height: "8rem" }}
          {...avatarConfig}
          shape="rounded"
        />
        <CirclePicker colors={skinColors} />
      </div>
      <Survey model={survey} />;
    </div>
  );
}
