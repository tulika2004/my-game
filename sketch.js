const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var scene;
var engine,world;
var bottle1,bottle2,bottle3;
var pt1,pt2,pt3,pt4;

var gun,bullet;

function preload(){
  backgroundImage=loadImage("Images/background.png")
  gunimage=loadImage("Images/gun.png")
}
function setup() {
  createCanvas(1200,1000);
  
  engine=Engine.create();
  world=engine.world;
  
  scene  = createSprite(600,500,1200,1000);
  //scene.addImage(backgroundImage);
  scene.scale = 1.5;
  gun=createSprite(1000,700,10,10);
  gun.addImage(gunimage);
  gun.scale = 0.7;
   

  bottle1=new bottle(100,100,70,70);
  bottle2=new bottle(300,100,70,70);
  bottle3=new bottle(500,100,70,70);

  pt1=new platform(200,600,200,150);
  pt2=new platform(370,500,200,150);
  pt3=new platform(530,550,200,150);
 // pt4=new platform(900,830,1800,30)

}

function draw() {
  background(255);  
  Engine.update(engine);
  drawSprites();
  //camera.position.x = mouseX;
  //camera.position.y = mouseY;

  if(mousePressedOver(bottle1)){
     
  }

  pt1.display();
  pt2.display();
  pt3.display();
 // pt4.display();

 bottle1.display();
  bottle2.display();
  bottle3.display();
               

}