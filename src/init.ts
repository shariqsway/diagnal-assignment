import { App } from "./app";
import { FontFace, FontWeight } from "./constants/Font";

const fonts = [
  {
    fontName: FontFace.TitilliumWeb,
    fileName: "TitilliumWeb-Regular.ttf",
    descriptors: {
      weight: FontWeight.Regular,
    },
  },
  {
    fontName: FontFace.TitilliumWeb,
    fileName: "TitilliumWeb-Bold.ttf",
    descriptors: {
      weight: FontWeight.Bold,
    },
  },
];

const initialize = async function () {
  const loadFonts = fonts.map(
    (font) =>
      new window.FontFace(
        font.fontName,
        `url(/static/fonts/${font.fileName})`,
        font.descriptors
      )
  );

  try {
    const fontObjects = await Promise.all(loadFonts);
    fontObjects.forEach((font) => {
      document.fonts.add(font);
    });
  } catch (error) {
    console.warn("Couln't load the fonts", error);
  }
};

const options = {
  stage: {
    w: 1280,
    h: 720,
    precision: 1,
  },
};

const startApp = async function () {
  await initialize();
  const app = new App(options);
  document.body.appendChild(app.stage.getCanvas());
  return;
};

window.addEventListener("DOMContentLoaded", () => {
  startApp();
});
