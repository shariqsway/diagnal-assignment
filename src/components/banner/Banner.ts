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
          text: "Rear Window",
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
          text: "When a struggling chef is unexpectedly reunited with her estranged family, she must learn to put aside their differences and work together to save their beloved restaurant from bankruptcy.",
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
}
