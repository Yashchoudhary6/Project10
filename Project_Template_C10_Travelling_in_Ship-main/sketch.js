function setup(){
  createCanvas(400,400);
}

var ship;
var sea; 

ship=position(50,200,50,50)
ship = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
sea=position(200,300,50,50)
sea = loadAnimation("sea.png") 
sea.velocityX = +5;

function preload(){
seaImg = loadImage("sea.png") 
shipImg = loadImage("ship-1.png")
ship.addImage(shipImg)
sea.addImage(seaImg)
}

function draw() {
  background("blue");
 if(sea.x < 200){
   sea.x = sea.width/2
 }
if (keyDown("space")){
ship.velocityY=-10;
}
ship.velocityY = ship.velocityY+0.08

ship.collide(sea);
}