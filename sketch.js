var bullet , wall;
var speed , weight , thickness; 

function setup() {
  createCanvas(1600,400);

  wall = createSprite(1200 , 200 , thickness , height/2);
  bullet  = createSprite(50,200,37,10);

speed = random(223,321);
weight = random(30,52);
thickness = random(22,83);

bullet.shapeColor = "white";
bullet.velocityX = speed;

}

function draw() {
  background(0);

  

  wall.shapeColor = (80,80,80);

if (hascollided(bullet , wall))
{
  bullet.velocityX = 0;
  var damage = 0.5*weight*speed*speed / (thickness*thickness*thickness);

  if (damage > 10)
  {
    wall.shapeColor = color(255,0,0);
  }

  if (damage < 10)
  {
    wall.shapeColor = color(0,255,0);
  }
}



  drawSprites();
}

function hascollided (bullet1 , wall2)
{
  bulletRightEdge = bullet1.x+bullet1.width;
  wallLeftEdge = wall2.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
  return false;
}
