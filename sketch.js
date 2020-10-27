var canvas, backgroundImage;
var Cars,Car1,Car2,Car3,Car4;
var gameState = 0;
var playerCount;
var allPlayers;
var white,black,blue,red;
var ground,track,map;
var distance = 0;
var database;

var form, player, game;
function preload(){
  white=loadImage("Images/car1.png");
  red=loadImage("Images/car2.png");
  blue=loadImage("Images/car3.png");
  black=loadImage("Images/car4.png");
  ground=loadImage("Images/ground.png")
  track=loadImage("Images/track.png")
  map=loadImage("Images/track.jpg")
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
   game.end();
  }
}
