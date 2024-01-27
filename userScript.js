import Game from "./library/Main.js";

const game = new Game("canvas");
game.display.fullScreen();
game.display.setCaption("Game");
game.display.set(400, 400);
game.display.icon('./download.png')
let running = true;
let X = 200;
let Y = 200;
let radius = 40;
let speed = 10;

function gameLoop() {
  game.event.getEvents().forEach((event) => {
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
      if (event.key === "ArrowUp") {
        Y -= speed;
      }
      if (event.key === "ArrowDown") {
        Y += speed;
      }
    }
    if (event.type === "Mouse_down") {
      console.log(event.position.x, event.position.y);
    }
  }
  );

  game.screen.fill([255, 255, 255]);
  let circle = game.draw.circle(X, Y, 100, [0, 255, 0]);
  let text = game.draw.text("Hello", 100, 100, 50, [0, 20, 0]);
  let rect = game.draw.rect(0, 0, 100, 100, [255, 0, 0]);

  if (game.collision.check(circle, text)) {
    game.draw.text("Collision", 100, 100,20, [0, 0, 0]);
  }
  if (!running) {
    game.quit();
  }
  else{
    game.display.update(gameLoop);
  }
}

gameLoop();
