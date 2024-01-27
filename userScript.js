import Game from "./library/Main.js";

const game = new Game("canvas");
game.display.fullScreen();
game.display.setCaption("Game");

let running = true;
let X = 200;
let Y = 200;
let radius = 40;
let speed = 10;

const image = game.image.loadImage('./download.png')

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
    }
    if (event.type === "Mouse_down") {
      if (event.button === 0) {
        console.log(event.position.x, event.position.y)
        game.screen.alert('안녕')
      }
      if (event.button === 2) {
        radius -= 10;
      }
    }
  });

  game.screen.fill([255, 255, 255]);
  game.draw.circle(X, Y, radius, [0, 255, 0]);
  game.draw.text("Hello World", 100, 100, [0, 0, 0]);
  game.image.drawImage(image, 0, 0, 100, 100)


  if (!running) {
    game.quit();
  }
  else{
    game.display.update(gameLoop);
  }
}

gameLoop();
