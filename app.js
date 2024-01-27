const game = new Game("canvas");

game.display.set(500, 700);

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
      if (event.key === "ArrowUp") {
        Y -= speed;
      }
      if (event.key === "ArrowDown") {
        Y += speed;
      }
      if (event.key === "a") {
        radius += 10;
        console.log("radius increased, radius: " + radius);
      }
      if (event.key === "s") {
        radius -= 10;
        console.log("radius decreased, radius: " + radius);
      }
      if (event.key === "d") {
        speed += 10;
        console.log("speed increased, speed: " + speed);
      }
      if (event.key === "f") {
        speed -= 10;
        console.log("speed decreased, speed: " + speed);
      }
    }
  });

  game.screen.fill([255, 255, 255]);
  game.Draw.circle(X, Y, radius, [0, 255, 0]);

  
  if (!running) {
    game.quit();
  }
  else{
    game.display.update(gameLoop);
  }
}

gameLoop();
