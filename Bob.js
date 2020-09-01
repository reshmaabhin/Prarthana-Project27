class Bob {
    constructor(x, y,radius) {
      var options = {
          isStatic:false,
          restitution:1,
          friction:0,
          density:0.8
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(255,92,92);
      circle(0,0,this.radius+20);
      pop();
    }
  };
  