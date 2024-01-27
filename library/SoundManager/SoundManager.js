class SoundManager {
    constructor() {
        this.sound = new Audio();
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }

    load(path) {
        this.sound.src = path;
        return this; // SoundManager 인스턴스 자체를 반환하여 체이닝을 가능하게 함
    }

    play() {
        this.sound.play();
        return this; // 체이닝을 위해 인스턴스 자체를 반환할 수도 있음
    }

    pause() {
        this.sound.pause();
        return this; // 체이닝을 위해 인스턴스 자체를 반환할 수도 있음
    }

    stop() {
        this.sound.pause();
        this.sound.currentTime = 0;
        return this; // 체이닝을 위해 인스턴스 자체를 반환할 수도 있음
    }

    setVolume(value) {
        this.sound.volume = value;
        return this; // 체이닝을 위해 인스턴스 자체를 반환할 수도 있음
    }
}

export default SoundManager;
