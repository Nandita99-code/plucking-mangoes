
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

function preload()
{
  boyimg=loadImage("boy.png");
  treeimg=loadImage("tree.png");
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	tree= new Tree(1050,340,450,500);
	
	ground= new Ground(650,595,1300,20);
stone= new Stone(225,420,50);
mango1=new Mango(1008,228,30);
  mango2=new Mango(1170,130,30);
	mango3=new Mango(1010,140,30);
	mango4=new Mango(1000,100,30);
	mango5=new Mango(1100,150,30);
	mango6=new Mango(1000,230,30);
	mango7=new Mango(900,230,40);
	mango8=new Mango(1140,150,40);
	mango9=new Mango(1100,230,40);
	mango10=new Mango(1200,200,40);
	mango11=new Mango(1120,50,40);
	mango12=new Mango(1200,250,40);

sling1 = new SlingShot(stone.body,{x:235,y:440});	
  
}


function draw() {
   background("pink");
   Engine.update(engine);
   image(boyimg,200,360,200,300);
   image(treeimg,800,40,500,600);
  // tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  sling1.display();
 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);
 detectCollision(stone,mango6);
 detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  detectCollision(stone,mango11);
  detectCollision(stone,mango12);
 text(mouseX+","+mouseY,mouseX,mouseY);
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  sling1.fly();
}
function detectCollision(lstone,lmango){
mangobody=lmango.body.position;
stonebody=lstone.body.position;

var distance= dist(stonebody.x,stonebody.y,mangobody.x,mangobody.y);
if(distance<= lmango.r+lstone.r){
 Matter.Body.setStatic(lmango.body,false);
}
}
function keyPressed(){
  if(keyCode === 32){
      sling1.attach(stone.body);
      
  }
}
