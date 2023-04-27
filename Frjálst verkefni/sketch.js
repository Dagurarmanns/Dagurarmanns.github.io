/* 
Ég heiti Dagur og ég vildi gera hreyfandi kúlur sem lætur lit breyta background
*/
var x = 0
var x1 = 0;
var y1 = 0;
var x2 = 180;
var y2 = 0;
var x3 = 360;
var y3 = 300;
var x4 = 100;
var y4 = 380;

function setup() {
  createCanvas(400,400);
background('#30DEF4') 
}

function draw() {
 background(250,10);
  fill('rgb(178,0,0)');
    for(var i = 1; i< 5;i = i+1) {
 //hringur teiknaður í x og y:
      ellipse(x1, y1, 18,18);
      ellipse(x2, y2, 18,18);
      ellipse(x3, y3, 18,18);
      ellipse(x4, y4, 18,18);
      ellipse(x1, y3, 18,18);
      ellipse(x2, y4, 18,18);
      ellipse(x3, y4, 18,18);
      ellipse(x2, y1, 18,18);
      ellipse(x3, y2, 18,18);
 //í hvert skipti sem farið er í gegn um draw:
      //færist hringur um 2 eða -2 til hægri með x og 2 eða -2 niður með y.
  x1 = x1+2;
  y1 = y1+2;
  x2 = x2+2;
  y2 = y2+2;
  x3 = x3-2;
  y3 = y3-2;
  x4 = x4-2;
  y4 = y4-2;  
 
 
}
  }