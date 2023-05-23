import lng from "@lightningjs/core";
import { Color } from "./constants/Color";
import { Clock } from "./components/clock/Clock";
import { Banner } from "./components/banner/Banner";
import { Rail } from "./components/rail/Rail";

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
      Banner: {
        type: Banner,
      },
      Rail: {
        type: Rail,
      },
    };
  }

  static _states() {
    return [
      class RailState extends this {
        $enter() {
          console.log("Rail - State Active");
        }
        $exit() {
          console.log("Rail - State Inactive");
        }
        _getFocused(): this {
          return this.tag("Rail");
        }
      },
    ];
  }

  _setup() {
    this._setState("RailState");
  }

  /* Handle fireAncestors() from Portrait Card */
  $updateBanner(title: string, description: string) {
    this.tag("Banner").patch({
      Title: {
        text: title,
      },
      Description: {
        text: description,
      },
    });
  }
}
