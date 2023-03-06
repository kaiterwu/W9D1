console.log("hello world");

import MovingObject from "./MovingObject.js";
import Asteroid from "./asteroid.js";

// const object = require("./MovingObject.js")


let test = new MovingObject({
  pos: [400,400],
  vel: [40,40],
  radius: 20,
  color: "#00FF00",
});


const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
// debugger
// test.draw(ctx)
window.canvas = canvas
window.ctx = ctx
window.MovingObject = MovingObject;
window.test = test;
// window.circle = test.draw(ctx)
