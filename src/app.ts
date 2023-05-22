import lng from "@lightningjs/core";
import { Color } from "./constants/Color";

export class App extends lng.Application {
  static _template() {
    return {
      rect: true,
      color: Color.background,
      w: 1280,
      h: 720,
      Title: {
        x: 20,
        y: 20,
        color: Color.text,
        text: {
          text: "Hello World, it's LightningJS!",
          fontSize: 30,
          fontFace: "TitilliumWeb",
        },
      },
    };
  }
}
