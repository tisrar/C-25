
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer
var ground
var stone
var rubber

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//hammer = new Hammer(300,100,100,100);
	ground = new Ground(400,690,800,20);
	hammer = createSprite(400,300,170,40)
	hammer.shapeColor = "orange"
	stone = new Stone(350,680,100,100);
	rubber = new Rubber(200,680,100,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");

 

  //hammer.display();  
  ground.display();
  stone.display();
  rubber.display();
  drawSprites();
}

