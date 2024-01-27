// this function checks if two objects are colliding
class Collision{
    constructor(){
        this.collision = false;
    }
    check(obj1, obj2){
        if(obj1.x.max > obj2.x.min && obj1.x.min < obj2.x.max && obj1.y.max > obj2.y.min && obj1.y.min < obj2.y.max){
            return true;
        }
        else{
            return false;
        }
    }
}

export default Collision;