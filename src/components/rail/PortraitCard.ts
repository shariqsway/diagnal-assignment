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
        texture: {
          type: lng.textures.ImageTexture,
          src: "",
        },
        shader: {
          type: lng.shaders.RoundedRectangle,
          radius: 10,
        },
      },
      Label: {
        x: 0,
        y: 248,
        w: 158,
        color: Color.text,
        text: {
          text: "",
          fontSize: 18,
          fontStyle: FontWeight.Regular,
          fontFace: "TitilliumWeb",
          lineHeight: 22,
          wordWrap: true,
          maxLines: 2,
          maxLinesSuffix: "...",
        },
      },
      Description: {
        alpha: 0,
        text: {
          text: "",
        },
      },
    };
  }

  set item(movie: { src: string; label: string; description: string }) {
    const { src, label, description } = movie;
    this.patch({
      Image: {
        texture: {
          src,
        },
      },
    });
    this.patch({
      Label: {
        text: label,
      },
    });
    this.patch({
      Description: {
        text: description,
      },
    });
  }

  _init() {
    /* Display fallback placeholder */
    this.tag("Image").on("txError", () => {
      this.displayPlaceholder();
    });
  }

  displayPlaceholder() {
    this.patch({
      Image: {
        texture: {
          src: "./static/images/placeholder.png",
        },
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

    /* Update the banner based on focused card */
    this.fireAncestors(
      "$updateBanner" as any,
      this.tag("Label").text.text,
      this.tag("Description").text.text
    );
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
