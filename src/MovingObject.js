class MovingObject {
  constructor(args) {
    this.pos = args.pos;
    this.vel = args.vel;
    this.radius = args.radius;
    this.color = args.color;
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
    ctx.fillStyle = this.color;
  }
}

export default MovingObject;
