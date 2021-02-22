const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box
var backgroundImg,platform;
var bg="sprites/1252987.jpg";


function preload() {
  getBackgroundImg();
}

function setup() {
 var canvas =  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
box = new Box(400,400,100000,15)
    
     
     
    
createSprite(400, 200, 50, 50);
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
 
 
 
 
 
 
 
 
 box.display();
    drawSprites();
}
async function getBackgroundImg(){

  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Vancouver");
  var responseJSON = await response.json();
  var DT = responseJSON.datetime
  console.log(DT)
  var hour = DT.slice(11,13);
  console.log(hour)
  if(hour>=06 && hour<=16){
      bg= "sprites/1252987.jpg";
  }
  else{
  bg= "sprites/bg2.jpg";
  }
  backgroundImg=loadImage(bg);
  
  }