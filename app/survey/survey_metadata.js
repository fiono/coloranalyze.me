export const surveyMetadata = {
  pages: [
    {
      name: "page1",
      elements: [
        {
          type: "file",
          name: "image_q",
          title: "Upload an Image",
          description: "Natural light no makeup :)",
        },
        {
          type: "color-comparison",
          name: "question2",
          title: "This or that",
        },
      ],
    },
    {
      name: "page2",
      elements: [
        {
          type: "colorComparison",
          name: "question2",
          title: "This or that",
          colorA: "red",
          colorB: "blue",
        },
      ],
      imageFit: "cover",
    },
  ],
  showTitle: false,
  goNextPageAutomatic: true,
  firstPageIsStarted: true,
  widthMode: "responsive",
  fitToContainer: true,
};
