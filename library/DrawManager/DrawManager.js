class DrawManager {
    constructor(ctx) {
      this.ctx = ctx;
    }
  
    rect(x, y, width, height, color) {
      this.ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
      this.ctx.fillRect(x, y, width, height);
      const range = { x: { min: x, max: x + width }, y: { min: y, max: y + height } }; //도형의 범위를 반환합니다.
      return range;
    }
  
    circle(x, y, radius, color) {
      this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      this.ctx.beginPath();
      this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
      this.ctx.fill();
      this.ctx.closePath();
      const range = { x: { min: x - radius, max: x + radius }, y: { min: y - radius, max: y + radius } };//도형의 범위를 반환합니다.
      return range;
    }
  
    text(text, x, y, color) {
      this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
      this.ctx.font = "30px Arial";
      this.ctx.fillText(text, x, y);
    }
  }
  
  export default DrawManager;
  