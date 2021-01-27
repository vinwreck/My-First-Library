var fixedRect, movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50); 
  movingRect = createSprite(600,200,50,50);

  movingRect.shapeColor="blue";
  fixedRect.shapeColor="green";

  movingRect.debug=true;
  fixedRect.debug=true;
  
}

function draw() {
  background(0,0,0); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  


  touching();
  drawSprites();
}

