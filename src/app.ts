import lng from "@lightningjs/core";
import { Color } from "./constants/Color";
import { Clock } from "./components/clock/Clock";

export class App extends lng.Application {
  static _template() {
    return {
      rect: true,
      color: Color.background,
      w: 1280,
      h: 720,
      Clock: {
        type: Clock,
      },
      Title: {
        x: 540,
        y: 40,
        color: Color.text,
        text: {
          text: "LIGHTNING WORKSHOP",
          fontSize: 20,
          fontFace: "TitilliumWeb",
        },
      },
    };
  }
}
