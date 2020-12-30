var a, b;

function setup() {
  createCanvas(2000,1400);
  a = createSprite(400, 200, 50, 50);
  a.shapeColor = "blue";
  a.velocityX = 5;

  b = createSprite(200, 200, 25, 25);
  b.shapeColor = "orange"; 
  b.velocityX = 5; 

  a.velocityX = -5;
  b.velocityX = 5; 
}

function draw() {
  background(255,255,255);  

  bounceoff(a, b);

  
  
  drawSprites();
}

