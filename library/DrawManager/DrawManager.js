class DrawManager {
    constructor(ctx) {
      this.ctx = ctx;
    }
  
    rect(x, y, width, height, color) {
      this.ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
      this.ctx.fillRect(x, y, width, height);
    }
  
    circle(x, y, radius, color) {
      this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
    }
  
    text(text, x, y, color) {
      this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      this.ctx.font = "30px Arial";
      this.ctx.fillText(text, x, y);
    }
  }
  
  export default DrawManager;
  