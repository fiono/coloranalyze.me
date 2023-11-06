export const surveyMetadata = {
  pages: [
    {
      name: "page1",
      title: "Start by uploading an image",
      elements: [
        {
          type: "file",
          name: "image_q",
          title: "Upload an Image",
          description: "Natural light no makeup :)",
          waitForUpload: true,
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
        },
      ],
    },
  ],
};
