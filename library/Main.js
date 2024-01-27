import DisplayManager from "./DisplayManager/DisplayManager.js";
import EventManager from "./Event/EventManager.js";
import ScreenManager from "./ScreenManager/ScreenManager.js";
import DrawManager from "./DrawManager/DrawManager.js";
import ImageManager from "./ImageManager/ImageManager.js";

class Game {
  constructor(canvasId) {
    this.display = new DisplayManager(canvasId);
    this.event = new EventManager();
    this.screen = new ScreenManager(this.display.ctx); //ctx is canvas context
    this.draw = new DrawManager(this.display.ctx);
    this.image = new ImageManager(this.display.ctx);
  }

  quit() {
    window.close(); // Note: This will not work in all environments
  }
}

export default Game;