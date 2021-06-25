


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("black");
  hr = hour();mn = minute();sc = second();

  push();
  translate(200,200)
  hrAngle = map(sc,0,60,0,360)
  mnAngle = map(sc,0,60,0,360)
  scAngle = map(sc,0,60,0,360)
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  
  pop()
  
    
  drawSprites();
  
}
