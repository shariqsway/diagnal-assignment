import lng from "@lightningjs/core";
import { Color } from "../../constants/Color";
import { FontWeight } from "../../constants/Font";
import { PortraitCard } from "./PortraitCard";

export class Rail extends lng.Component {
  _index: number = 0;
  _dataLength: number = 0;

  static _template() {
    return {
      Title: {
        x: 40,
        y: 290,
        color: Color.text,
        text: {
          text: "Romatic Comedy",
          fontSize: 28,
          fontStyle: FontWeight.Regular,
          fontFace: "TitilliumWeb",
        },
      },
      Content: {
        x: 40,
        y: 340,
        h: 200,
        w: 1200,
        Wrapper: {},
      },
    };
  }

  _init() {
    const data = require("../../../data/page1.json").page["content-items"]
      .content;
    this._dataLength = data.length;

    type Card = {
      type: typeof PortraitCard;
      x: number;
      item: {
        w: number;
        h: number;
        src: string;
        label: string;
      };
    };

    type Movie = {
      name: string;
      description: string;
      "poster-image": string;
    };

    const cards: Card[] = [];
    data.map((item: Movie, index: number) => {
      cards.push({
        type: PortraitCard,
        x: index * (158 + 12),
        item: {
          w: 158,
          h: 237,
          src: `./static/images/${item["poster-image"]}`,
          label: item.name,
        },
      });
    });
    this.tag("Wrapper").children = cards;
  }

  get items() {
    return this.tag("Wrapper").children;
  }

  get activeItem() {
    return this.items[this._index];
  }

  _getFocused(): this {
    return this.tag("Wrapper").children[this._index];
  }

  _handleRight() {
    const previousIndex = this._index;
    if (this._index === this._dataLength - 1) {
      this._index = 0;
    } else {
      this._index += 1;
    }
    const newIndex = this._index;
    this.handleSelection(previousIndex, newIndex);
  }

  _handleLeft() {
    const previousIndex = this._index;
    if (this._index === 0) {
      this._index = this._dataLength - 1;
    } else {
      this._index -= 1;
    }
    const newIndex = this._index;
    this.handleSelection(previousIndex, newIndex);
  }

  private handleSelection(previousIndex: number, newIndex: number) {
    if (previousIndex !== newIndex) {
      this.handleScroll();
    }
  }

  handleScroll() {
    const wrapper = this.tag("Wrapper");
    const contentW = this.tag("Content").w;
    const currentWrapperX = wrapper.transition("x").targetvalue || wrapper.x;
    const currentFocus = wrapper.children[this._index];
    const currentFocusX = currentFocus.x + currentWrapperX;
    const currentFocusOuterWidth = currentFocus.x + currentFocus.w;
    if (currentFocusX < 0) {
      wrapper.setSmooth("x", -currentFocus.x);
    } else if (currentFocusOuterWidth > contentW) {
      wrapper.setSmooth("x", contentW - currentFocusOuterWidth);
    }
  }
}
