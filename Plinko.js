class Plinko{
  constructor(x,y) {
    var options = {
        isStatic: true
    }
    this.radius = 10;
    this.body = Bodies.circle(x,y,this.radius, options);
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("white");
    circle(pos.x, pos.y,this.radius);
  }
};
