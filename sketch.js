
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;

var ground

function setup()
{
  createCanvas(400,400);
  engine = Engine.create ();
  world = engine.world

  var ball_options = {
    restitution: 1.5
  }

  ball = Bodies.circle (100,10,20, ball_options);
  World.add (world, ball);

  var ball2_options = {
    restitution:1
  }
  
  ball2 = Bodies.circle (150, 10, 20, ball2_options);
  World.add (world, ball2);

  var ground_options = {
    isStatic:true
  }
  
ground = Bodies.rectangle (0, 390, 400, 20, ground_options);
World.add (world, ground)

}

function draw() 
{
  background("black");
  Engine.update (engine);
  ellipse (ball.position.x, ball.position.y, 20)
  rect (ground.position.x, ground.position.y, 400, 20)
  ellipse (ball2.position.x, ball2.position.y, 20)
}

