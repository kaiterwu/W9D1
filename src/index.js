console.log("hello world");

import MovingObject from "./MovingObject.js";

// const object = require("./MovingObject.js")

let test = new MovingObject({
  pos: [1, 2],
  vel: 10,
  radius: 5,
  color: "#00FF00",
});
window.MovingObject = MovingObject;
