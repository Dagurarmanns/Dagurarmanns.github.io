function setup() {
  createCanvas(400,400);
  background(255, 215, 0);
  fill(0);
  colorMode(HSB);
  frameRate(5);
}

function draw(){
  
  for(var i = 240; i>10; i= i-20){
    fill(random(180,360),75,100);
    ellipse(200, 200,i,i);
  }
    
  
}  