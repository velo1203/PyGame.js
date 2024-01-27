class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this
            .canvas
            .getContext("2d");
        this.events = [];
        this.initEventListeners();
    }

    initEventListeners() {
        window.addEventListener("keydown", (e) => {
            this
                .events
                .push({type: "Key_down", key: e.key});
        });
    }

    event = {
        get: () => {
            const eventsCopy = [...this.events];
            this.events.length = 0; // Clear the events array
            return eventsCopy;
        }
    };

    display = {
        set: (width, height) => {
            this.canvas.width = width;
            this.canvas.height = height;
        },
        full_screen: () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        },
        update: (loop) => {
            requestAnimationFrame(loop)
        },
        set_caption: (caption) => {
            document.title = caption;
        }
    };

    screen = {
        fill: (color) => {
            this.ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
            this
                .ctx
                .fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
    };

    Draw = {
        rect: (x, y, width, height, color) => {
            this.ctx.fillStyle = `rgb(${color[0]},${color[1]},${color[2]})`;
            this
                .ctx
                .fillRect(x, y, width, height);
        },
        circle: (x, y, radius, color) => {
            this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            this
                .ctx
                .beginPath();
            this
                .ctx
                .arc(x, y, radius, 0, 2 * Math.PI);
            this
                .ctx
                .fill();
            this
                .ctx
                .closePath();
        },
        Text: (text, x, y, color) => {
            this.ctx.fillStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
            this.ctx.font = "30px Arial";
            this
                .ctx
                .fillText(text, x, y);
        }
    }

    quit = () => {
        window.close(); // This will not work in all environments, as modern browsers restrict this behavior
    };
}