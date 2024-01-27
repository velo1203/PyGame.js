class ScreenManager {
    constructor(ctx) {
      this.ctx = ctx;
    }
  
    fill(color) {
      this.ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
  
    alert(text) {
      alert(text);
    }
  }
  
  export default ScreenManager;
  