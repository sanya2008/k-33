const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var boy;
var boy_jumping;

function preload(){
  if(backgroundImg)
  background(backgroundImg);
  boy_jumping=loadAnimation("boy1-removebg-preview.png","boy2-removebg-preview.png")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  boy=createSprite(500,250,50,50)
  boy.addAnimation("jumping",boy_jumping)
  boy.scale=2

}

function draw() {
  background(backgroundImg);
  drawSprites();
  Engine.update(engine);

  boy.display();
}