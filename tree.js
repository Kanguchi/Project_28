class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("tree.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill("brown");
      imageMode(CENTER);
      image(this.image, 600, 460, this.width, this.height);
    }
  };