var x = 200;
 var y = 200;

function setup() {
  createCanvas(500,400);
  noStroke();

}

function draw() {
  x = mouseX
  y = mouseY
  background(289, 55, 45);
   beginShape();
  fill(150, 7,0);
  vertex(x-20,y+70);
  vertex(x+140, y-90);
  vertex(x-10,y-80);
  vertex(x+5,y+100);
  vertex(x+160,  y+100);
  vertex(x-30,y-15);
  vertex(x-80,y-90);
  vertex(x-70, y+15);
  vertex(x-70,y+140)
  endShape();
}