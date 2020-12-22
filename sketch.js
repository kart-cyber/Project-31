const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);
  ground = new Ground(0,750,480,50);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  drawSprites();
  ground.display();
}