
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex2.png","trex3.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
   trex=createSprite(50,160,120,50)
   ground=createSprite(200,180,400,20)

   trex.addAnimation("running",trex_running)
}

function draw(){
  background("white")

  if(keyDown("space")){
    trex.velocityY=-10;

  }
    trex.velocityY=trex.velocityY+0.5

drawSprites()
}
