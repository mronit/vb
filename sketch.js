var movingr,fixedr








function setup() {
  createCanvas(800,400);
  fixedr = createSprite(200, 200, 50, 50);
  fixedr.shapeColour = "green";
  fixedr.debug = true;
  movingr = createSprite(400, 200, 80, 30);
  movingr.shapeColour = "green";
  movingr.debug = true;
}

function draw() {
  background(255,255,255);  
  
  movingr.x = World.mouseX;
  movingr.y = World.mouseY;
  
  if (movingr.x - fixedr.x < movingr.width/2 + fixedr.width/2 && fixedr.x - movingr.x < movingr.width/2 + fixedr.width/2  ){
    movingr.shapeColour = 'red';
    fixedr.shapeColour = 'red';
  }
  
  
  else {
    movingr.shapeColour = 'green';
    fixedr.shapeColour ='green';
  }
  
  drawSprites();

}