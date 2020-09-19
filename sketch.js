
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, tree_img, ground;
var boy, boy_img;
var stoneObj, slingShot;
var mango1;

function preload()
{
	boy_img = loadImage("boy.png");
	tree_img = loadImage("tree.png");
}

function setup() {
	createCanvas(800, 700);

	boy = createSprite(150, 600, 50, 70);
	boy.addImage(boy_img);
	boy.scale = 0.07;

	tree = createSprite(600, 480, 300, 390);
	tree.addImage(tree_img);
	tree.scale = 0.26;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 650, 800, 20);
	//tree =  new Tree(600, 440, 300, 390);
	stoneObj =  new Stone(110, 560, 15);
	
	mango6 = new mango(500, 440, 50);
	mango2 = new mango(510, 400, 40);
	mango3 = new mango(550, 370, 50);
	mango4 = new mango(560, 450, 40);
	mango5 = new mango(640, 420, 50);
	mango1 = new mango(600, 360, 50);
	

	slingShot = new Slingshot(stoneObj.body, {x: 110, y: 560});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("snow");
  drawSprites();
  ground.display();
  //tree.display();
  stoneObj.display();
  slingShot.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  detectCollision(stoneObj, mango1);
  detectCollision(stoneObj, mango2);
  detectCollision(stoneObj, mango3);
  detectCollision(stoneObj, mango4);
  detectCollision(stoneObj, mango5);
  detectCollision(stoneObj, mango6);

}


function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX, y: mouseY});

}

function mouseReleased(){
    slingShot.fly();
}

function detectCollision(lstone, lmango){
	mangoBodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);

		if(distance<=lmango.r+lstone.r){
			Matter.Body.setStatic(lmango.body, false);
		}
}

