class mango {
    constructor(x,y,r) {
      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1
      }
      this.x=x;
	  this.y=y;
	  this.r=r;
	  this.body=Bodies.circle(this.x, this.y, this.r/2, options);
      this.image = loadImage("mango.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill("brown");
      imageMode(CENTER);
      image(this.image, 0, 0, this.r, this.r);
    }
  };