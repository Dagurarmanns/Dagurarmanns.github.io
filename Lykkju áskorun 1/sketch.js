function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  
  for(var x = 10; x < width; x = x+20) {
    fill(random(180,360),75,100);
    for(var y = 10; y < height; y = y+20){
  
    ellipse(x, y,15  ,15, 15);
    }
  }
}  