import lng from "@lightningjs/core";
import { Color } from "../../constants/Color";

export class Clock extends lng.Component {
  static _template() {
    return {
      Time: {
        x: 1120,
        y: 20,
        color: Color.clock,
        text: {
          text: "",
          fontSize: 50,
          fontFace: "TitilliumWeb",
        },
      },
    };
  }

  _init() {
    const fillZero = (n: number) => {
      return ("0" + n).slice(-2);
    };

    setInterval(() => {
      const now = new Date();
      const time = `${fillZero(now.getHours())}:${fillZero(now.getMinutes())}`;
      this.tag("Time").patch({
        text: {
          text: time,
        },
      });
    }, 1000);
  }
}
