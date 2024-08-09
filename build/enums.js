"use strict";
//a re used to define the set of constants
var direction;
(function (direction) {
    direction[direction["up"] = 0] = "up";
    direction[direction["down"] = 1] = "down";
    direction[direction["right"] = 2] = "right";
    direction[direction["left"] = 3] = "left"; //3
})(direction || (direction = {}));
// enum does not exist keyword in javascript
function dosomething(keypressed) {
    switch (keypressed) {
        case direction.up:
            console.log("you preesed up");
            break;
        case direction.down:
            console.log("you preesed down");
            break;
        case direction.left:
            console.log("you preesed left");
            break;
        case direction.right:
            console.log("you preesed right");
            break;
        default:
            console.warn("invlaid direction");
    }
}
dosomething(direction.up);
//enums in express
