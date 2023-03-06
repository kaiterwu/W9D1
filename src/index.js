console.log("hello world");

import MovingObject from "./MovingObject.js";

// const object = require("./MovingObject.js")


let test = new MovingObject({
  pos: [100,200],
  vel: 10,
  radius: 50,
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
