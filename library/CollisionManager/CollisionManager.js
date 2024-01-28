class Collision {
    constructor() {
        this.collision = false;
    }

    // 기존 객체 간 충돌 체크 메서드
    check(obj1, obj2) {
        if (obj1.x.max > obj2.x.min && obj1.x.min < obj2.x.max && obj1.y.max > obj2.y.min && obj1.y.min < obj2.y.max) {
            return true;
        } else {
            return false;
        }
    }
}

export default Collision;
