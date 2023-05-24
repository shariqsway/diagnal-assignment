import lng from "@lightningjs/core";
import { Color } from "../../constants/Color";
import { FontWeight } from "../../constants/Font";

export class Banner extends lng.Component {
  static _template() {
    return {
      Title: {
        x: 40,
        y: 110,
        color: Color.text,
        text: {
          text: "",
          fontSize: 28,
          fontStyle: FontWeight.Bold,
          fontFace: "TitilliumWeb",
        },
      },
      Description: {
        x: 40,
        y: 160,
        w: 600,
        color: Color.text,
        text: {
          text: "",
          fontSize: 25,
          fontFace: "TitilliumWeb",
          lineHeight: 30,
          wordWrap: true,
          maxLines: 2,
          maxLinesSuffix: "...",
        },
      },
    };
  }

  _init() {
    /* Animate title and description on load */
    const titleAnimation = this.tag("Title").animation({
      duration: 0.5,
      repeat: 0,
      stopMethod: "immediate",
      actions: [{ p: "x", v: { 0: 60, 1: 40 } }],
    });
    titleAnimation.start();

    const descriptionAnimation = this.tag("Description").animation({
      duration: 0.6,
      repeat: 0,
      stopMethod: "immediate",
      actions: [{ p: "x", v: { 0: 80, 1: 40 } }],
    });
    descriptionAnimation.start();
  }
}
