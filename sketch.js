
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var wall;

var ground

function setup()
{
  createCanvas(400,400);
  engine = Engine.create ();
  world = engine.world

  var ball_options = {
    restitution: 1.5
  }


  var ball2_options = {
    restitution:1
  }
  
  var ground_options = {
    isStatic:true
  }

  ball = Bodies.circle (100,10,20, ball_options);
  World.add (world, ball);

  
  ball2 = Bodies.circle (250, 10, 20, ball2_options);
  World.add (world, ball2);

  
ground = Bodies.rectangle (200, 390, 400, 20, ground_options);
World.add (world, ground)
wall = Bodies.rectangle (250, 200, 200, 20, ground_options);
World.add (world, wall)

rectMode (CENTER);
ellipseMode (RADIUS)

}

function draw() 
{
  background("black");
  Engine.update (engine);
  ellipse (ball.position.x, ball.position.y, 20)
  rect (ground.position.x, ground.position.y, 400, 20)
  ellipse (ball2.position.x, ball2.position.y, 20)
  rect (wall.position.x, wall.position.y, 200, 20)
}

