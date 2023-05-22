import lng from "@lightningjs/core";

export class App extends lng.Application {
  static _template() {
    return {
      rect: true,
      color: 0xff141414,
      w: 1280,
      h: 720,
      Title: {
        x: 20,
        y: 20,
        color: 0xffffffff,
        text: {
          text: "Hello World, it's LightningJS!",
          fontSize: 30,
        },
      },
    };
  }
}
