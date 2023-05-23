import lng from "@lightningjs/core";
import { Color } from "../../constants/Color";
import { FontWeight } from "../../constants/Font";

export class PortraitCard extends lng.Component {
  static _template() {
    return {
      w: 158,
      h: 246,
      Image: {
        w: 158,
        h: 237,
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: 10,
        },
      },
      Label: {
        x: 0,
        y: 255,
        color: Color.text,
        text: {
          text: "Portrait Card",
          fontSize: 18,
          fontStyle: FontWeight.Regular,
          fontFace: "TitilliumWeb",
        },
      },
    };
  }

  set item(movie: { src: string; label: string }) {
    const { src, label } = movie;
    this.patch({
      Image: { src },
    });
    this.patch({
      Label: {
        text: label,
      },
    });
  }

  _focus() {
    this.tag("Image").patch({
      shader: {
        stroke: 5,
        strokeColor: Color.focus,
      },
    });
  }

  _unfocus() {
    this.tag("Image").patch({
      shader: {
        stroke: 0,
        strokeColor: Color.text,
      },
    });
  }
}
