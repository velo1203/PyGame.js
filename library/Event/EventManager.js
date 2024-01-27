class EventManager {
    constructor() {
      this.events = [];
      this.initEventListeners();
    }
  
    initEventListeners() {
      window.addEventListener("keydown", (e) => this.events.push({ type: "Key_down", key: e.key }));
      window.addEventListener("keyup", (e) => this.events.push({ type: "Key_up", key: e.key }));
      window.addEventListener("mousedown", (e) => this.events.push({ type: "Mouse_down", button: e.button, position: { x: e.clientX, y: e.clientY }}));
      window.addEventListener("mouseup", (e) => this.events.push({ type: "Mouse_up", button: e.button, position: { x: e.clientX, y: e.clientY }}));
      window.addEventListener("mousemove", (e) => this.events.push({ type: "Mouse_move", position: { x: e.clientX, y: e.clientY }}));
      window.addEventListener("wheel", (e) => this.events.push({ type: "Mouse_wheel", delta: e.deltaY }));
    }
  
    getEvents() {
      const eventsCopy = [...this.events];
      this.events.length = 0;
      return eventsCopy;``
    }
  }
  
  export default EventManager;
  