import { App } from "./app";

const options = {
  stage: {
    w: 1280,
    h: 720,
    precision: 1,
  },
};

const startApp = async function () {
  const app = new App(options);
  document.body.appendChild(app.stage.getCanvas());
  return;
};

window.addEventListener("DOMContentLoaded", () => {
  startApp();
});
