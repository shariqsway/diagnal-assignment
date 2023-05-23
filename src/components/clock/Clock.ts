import lng from "@lightningjs/core";
import { Color } from "../../constants/Color";
import { FontWeight } from "../../constants/Font";

export class Clock extends lng.Component {
  static _template() {
    return {
      Time: {
        x: 1125,
        y: 20,
        color: Color.clock,
        text: {
          text: "",
          fontSize: 50,
          fontFace: "TitilliumWeb",
          fontStyle: FontWeight.Light,
        },
      },
    };
  }

  _init() {
    this.displayTime();
    setInterval(() => {
      this.displayTime();
    }, 1000);
  }

  displayTime() {
    /* Append leading 0 to single values */
    const fillZero = (n: number) => {
      return ("0" + n).slice(-2);
    };

    const now = new Date();
    const time = `${fillZero(now.getHours())}:${fillZero(now.getMinutes())}`;
    this.tag("Time").patch({
      text: {
        text: time,
      },
    });
  }
}
