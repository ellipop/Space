var bg, bgImg;
var sleep;
var gym, eat, drink, brush, move, bath; 
var player;
var GUI, inst;

var top,bottom,left,right;

function preload(){
  bgImg = loadImage("iss.png")
  sleep = loadAnimation("sleep.png");
  bath = loadAnimation("bath1.png", "bath2.png");
  brush = loadAnimation("brush.png");
  drink = loadAnimation("drink1.png", "drink2.png", "drink2.png", "drink1.png", "eat2.png", "eat1.png");
  gym = loadAnimation("gym1.png", "gym1.png", "gym2.png", "gym2.png", "gym11.png","gym11.png", "gym12.png", "gym12.png");
  move = loadAnimation("move.png",  "move.png", "move1.png", "move1.png","move1.png", "move.png", "move.png",  "move.png",  "move1.png", "move1.png");

  GUI = loadImage("Instructions.png");  
}

function setup() {
  createCanvas(800,400);
  bg = createSprite(400, 200, 50, 50);
  bg.scale = 0.2;
  bg.addImage(bgImg);


  bottom = createSprite(400,400, 800,40);
  bottom.visible = true;

  left = createSprite(20,200, 20,400);
  left.visible = true;

  right = createSprite(780,200,20,400);
  right.visible = true;

  top = createSprite(400,10, 800,20);
  top.visible = true;

  player = createSprite(400,200,50,50);
  player.addAnimation("sleep", sleep);
  player.addAnimation("move", move);
  
  player.scale = 0.1;
  
  inst = createSprite(80,70, 30,30);
  inst.addImage(GUI);
  inst.scale = 0.10;

  player.debug = false;
  player.setCollider("rectangle", 0,0,900,2000);

}


function draw() {
  background("black");
  if (keyDown("m")){
    player.velocityX = -1; 
    player.velocityY = 1;
    player.changeAnimation("move", move);
  }
  if (keyDown("UP_ARROW")){
    player.addAnimation("brushing", brush);
    player.changeAnimation("brushing");
    player.y = 350;
    player.velocityY = 0;
    player.velocityX = 0;
  }
  if (keyDown("DOWN_ARROW")){
    player.addAnimation("bath", bath);
    player.changeAnimation("bath");
    player.scale = 0.1;
    player.y = 20;
    player.velocityY = 1;
    player.velocityX = -1;
  }
    if (keyDown("LEFT_ARROW")){
    player.addAnimation("gym", gym);
    player.changeAnimation("gym");
    player.scale = 0.1;
    player.y = 20;
    player.velocityY = 1;
    player.velocityX = 1;
  }
  if (keyDown("RIGHT_ARROW")){
    player.addAnimation("drink", drink);
    player.changeAnimation("drink");
    player.scale = 0.1;
    player.y = 20;
    player.velocityY = 1;
    player.velocityX = 1;
  }


  touchesEdges();
  drawSprites();

}


function touchesEdges() {
  if (player.isTouching(bottom)){
    player.velocityX = 1;
    player.velocityY = -1;
  }
}