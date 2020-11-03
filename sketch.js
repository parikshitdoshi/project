
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbinObj;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Ball(200,450,40);
	console.log(paper);

	ground = new Ground(width/2,670,width,20);

	dustbinObj = new Dustbin(1200,750);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  

  paper.display();
  ground.display();
 
  dustbinObj.display();

  drawSprites();
 
}

function KeyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body, paper.body.position,{x: 85,y: -85});

		
	}




}

