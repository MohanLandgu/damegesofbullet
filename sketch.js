var thickness,wall;
var bullet,speed,weight;



function setup() {
  createCanvas(800,400);
  bullet=createSprite(100, 200, 40, 20);
  bullet.velocityX = 5;
  wall=createSprite(700,200,thickness,height/2);

  thickness=random(22,83);
  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(0);
  
  if(hasCollided(bullet,wall)){
   
bullet.velocityX=0;
var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)

if(damage>10){
 bullet.shapeColor=color("yellow");
  wall.shapeColor=color(255,0,0)

}

if(damage<10){
  bullet.shapeColor=color("yellow");
wall.shapeColor=color(0,255,0)


}




  }

  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){

return true

}

return false

}