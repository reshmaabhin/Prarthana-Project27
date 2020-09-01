
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   bob1=new Bob(300,500,25);
   bob2=new Bob(350,500,25);
   bob3=new Bob(400,500,25);
   bob4=new Bob(450,500,25);
   bob5=new Bob(500,500,25);

   roof1= new Roof(400,250,270,35);
   
   rope1=new Rope(bob1.body,roof1.body,-100,0);
   rope2=new Rope(bob2.body,roof1.body,-50,0);
   rope3=new Rope(bob3.body,roof1.body,0,0);
   rope4=new Rope(bob4.body,roof1.body,50,0);
   rope5=new Rope(bob5.body,roof1.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(243,243,243);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof1.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

  }
  if(keyCode===DOWN_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:0});
//150
  }
}


