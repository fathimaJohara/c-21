var fixedRect, movingRect;
var car,wall

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car=createSprite(100,200,20,20)
  car.shapeColor="yellow"
  wall=createSprite(1000,200,20,100)
  wall.shapeColor="red"
  car.velocityX=5

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  
  if(istouch(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";

  }
  else{
    movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  }
  if(istouch(car,wall)){
    bounceoff(car,wall)
  }
  
  
  

  
  drawSprites();
}
