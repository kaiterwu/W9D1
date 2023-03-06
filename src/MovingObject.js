class MovingObject {
  constructor(args) {
    this.pos = args.pos;
    this.vel = args.vel;
    this.radius = args.radius;
    this.color = args.color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI,);
    // ctx.arc(100,75,50,0,2*Math.PI)
    ctx.fillStyle = this.color;
    ctx.fill()
  }

  move(){
    this.pos[0]+=this.vel[0]
    this.pos[1] += this.vel[1]

  }
}

export default MovingObject;
