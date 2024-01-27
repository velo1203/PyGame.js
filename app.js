const game = new Game("canvas");

game.display.full_screen();
game.display.set_caption("Game");

let running = true;
let X = 200;
let Y = 200;
let radius = 40;
let speed = 10;

function gameLoop() {
  game.event.get().forEach((event) => {
    if (event.type === "Key_down") {
      if (event.key === "q") {
        running = false;
      }
      if (event.key === "ArrowRight") {
        X += speed;
      }
      if (event.key === "ArrowLeft") {
        X -= speed;
      }
    }
  });

  game.screen.fill([255, 255, 255]);
  game.Draw.circle(X, Y, radius, [0, 255, 0]);
  game.Draw.Text("Hello World", 100, 100, [0, 0, 0]);
  
  if (!running) {
    game.quit();
  }
  else{
    game.display.update(gameLoop);
  }
}

gameLoop();
