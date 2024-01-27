import Game from "./library/Main.js";

const game = new Game("canvas");
game.display.fullScreen();
game.display.setCaption("Game");

let paddle = {
    x: 300,
    y: 700,
    width: 100,
    height: 20,
    color: [0,0,0]
};

function loop() {
    
    game.event.getEvents().forEach(event => {
        if (event.type === "Key_down") {
            if (event.key === "ArrowLeft") {
                paddle.x -= 10;
            }
            if (event.key === "ArrowRight") {
                paddle.x += 10;
            }
        }
    });

    game.draw.rect(paddle.x, paddle.y, paddle.width, paddle.height, paddle.color);
    game.display.update(loop);
}

loop();
