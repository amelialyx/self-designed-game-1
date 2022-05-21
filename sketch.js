var bg, bgImg;
var bird, birdFlying, birdCollided;
var aeroplane, aeroplaneImg;
var restart, restartImg;
var gameOver, gameOverImg;

function preload(){
  bgImg = loadImage("images.png");
  birdFlying = loadAnimation("bird1.png","bird2.png","bird3.png","bird4.png","bird5.png");
  birdCollided = loadAnimation("birdcollided.png");
  aeroplaneImg = loadImage("aeroplane.png");
  restartImg = loadImage("restart.png");
  gameOverImg = loadImage("gameover.png");
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  bg = createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg);
  bg.scale = 1.05;

  bird = createSprite(width/2, height/2);
  bird.addAnimation("birdFlying", birdFlying);
  
}

function draw(){
  background(150);
  drawSprites();
}