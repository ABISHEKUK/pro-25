
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trashcan, ball, ground;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;
	
	
	
	trashcan1 = new Trashcan(1000,645,170,30);
	trashcan2 = new Trashcan(910,600,30,150);
	trashcan3 = new Trashcan(1100,600,30,150);

    ball = new Ball(100,150,40);
	
	ground = new Ground(width/2,670,width,20);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  
  drawSprites();
  ball.display();
  ground.display();
  trashcan1.display();
  trashcan2.display();
  trashcan3.display();
}
function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:330,y:-330});
		
	}
	

}