class DisplayManager {
    constructor(canvasId) {
      this.canvas = document.getElementById(canvasId);
      this.ctx = this.canvas.getContext("2d");
    }
  
    set(width, height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  
    fullScreen() {
      this.set(window.innerWidth, window.innerHeight);
    }
  
    update(loop) {
      requestAnimationFrame(loop);
    }
  
    setCaption(caption) {
      document.title = caption;
    }
  }
  
  export default DisplayManager;
  