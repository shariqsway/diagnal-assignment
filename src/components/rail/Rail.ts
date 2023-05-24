import lng from "@lightningjs/core";
import { Color } from "../../constants/Color";
import { FontWeight } from "../../constants/Font";
import { PortraitCard } from "./PortraitCard";
import {
  dataPage1,
  dataPage2,
  dataPage3,
  dataPage1Length,
  dataPage2Length,
  dataPage3Length,
  dataPageTitle,
} from "../../../data";

type Card = {
  type: typeof PortraitCard;
  x: number;
  item: {
    src: string;
    label: string;
    description: string;
  };
};

type Movie = {
  name: string;
  description: string;
  "poster-image": string;
};

export class Rail extends lng.Component {
  _index: number = 0;
  _dataLength: number = 0;
  _cardWidth: number = 158;
  _cardGap: number = 12;
  cards: Card[] = [];

  static _template() {
    return {
      Title: {
        x: 40,
        y: 290,
        color: Color.text,
        text: {
          text: dataPageTitle,
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
    /* Load initial data from page 1 */
    this._dataLength = dataPage1Length;
    dataPage1.map((item: Movie, index: number) => {
      this.cards.push({
        type: PortraitCard,
        x: index * (this._cardWidth + this._cardGap),
        item: {
          src: `./static/images/${item["poster-image"]}`,
          label: item.name,
          description: item.description,
        },
      });
    });
    this.tag("Wrapper").children = this.cards;
    this.handleLazyLoad();
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
    if (previousIndex === this._dataLength - 1) {
      this._index = 0;
    } else {
      this._index += 1;
    }
    const newIndex = this._index;
    this.handleSelection(previousIndex, newIndex);
  }

  _handleLeft() {
    const previousIndex = this._index;
    if (previousIndex !== 0) {
      if (previousIndex === 0) {
        this._index = this._dataLength - 1;
      } else {
        this._index -= 1;
      }
      const newIndex = this._index;
      this.handleSelection(previousIndex, newIndex);
    }
  }

  private handleSelection(previousIndex: number, newIndex: number) {
    if (previousIndex !== newIndex) {
      this.handleLazyLoad();
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

  /* Lazy load the data as you scroll and about to reach the end of current data page */
  handleLazyLoad() {
    const cardIndex = this._index;
    const totalCards = this.tag("Wrapper").children.length;
    if (cardIndex === dataPage1Length - 1 && totalCards === dataPage1Length) {
      this._dataLength = dataPage2Length + totalCards;
      dataPage2.map((item: Movie, index: number) => {
        const newIndex = totalCards + index;
        this.cards.push({
          type: PortraitCard,
          x: newIndex * (this._cardWidth + this._cardGap),
          item: {
            src: `./static/images/${item["poster-image"]}`,
            label: item.name,
            description: item.description,
          },
        });
      });
      this.tag("Wrapper").children = this.cards;
    } else if (
      cardIndex === dataPage1Length + dataPage2Length - 1 &&
      totalCards === dataPage1Length + dataPage2Length
    ) {
      this._dataLength = dataPage3Length + totalCards;
      dataPage3.map((item: Movie, index: number) => {
        const newIndex = totalCards + index;
        this.cards.push({
          type: PortraitCard,
          x: newIndex * (this._cardWidth + this._cardGap),
          item: {
            src: `./static/images/${item["poster-image"]}`,
            label: item.name,
            description: item.description,
          },
        });
      });
      this.tag("Wrapper").children = this.cards;
    }
  }
}
