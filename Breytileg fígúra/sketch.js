
  
  var eyeSize = 20; 
  var faceWidth = 120; 
  var faceHeight = 160; 
  var mouthWidth= 40 ;
  var mouthHeight= 40 ;
  var eyebrowWidth= 30;
  var eyebrowHeight=10;
  var mustacheWidth=40;
  var mustacheHeight=15;
  var noseWidth=10;
  var noseHeight=10;
  var x = 150; 
  var y = 150;
 
  function setup(){
    createCanvas (300,300); 
    rectMode(CENTER);
  }
 
  function draw(){
    
    
    rect(width/2, height/2,mouseX,mouseY);
    background('#80CAEA'); 
    
    strokeWeight(3) 
    fill('#062F50')
    stroke('white')
    arc(150,320,160,160,PI,3.15+PI,PIE);
    stroke('black')
    strokeWeight(1)
    
  
    
    
    fill('#FAF4BF')
    rect(150, 220, 50, 75,20);
    ellipse(x, y, faceWidth, faceHeight);
    triangle(160,160,150,145,140,160)
    
    
    fill('#67CEFD');
    ellipse(125,130,eyeSize);
    ellipse(175,130,eyeSize);
   fill('white')
    arc(x, 185, mouthWidth, mouthHeight,0,PI,PIE);
    
    fill('rgb(83,41,1)')
    rect(125, 105, eyebrowWidth, eyebrowHeight, 20, 15, 5, 5)
    rect(175, 105, eyebrowWidth, eyebrowHeight, 20, 15, 5, 5)
    rect(150,175,mustacheWidth,mustacheHeight,20,15,5,5)
    
    fill('black')
    ellipse(125,130,5);
    ellipse(175,130,5);
    
    fill('yellow')
    rect(30, 30, 30,30)
    
    fill('yellow')
    line(50, 30, 70,30 );
    line(30,50,30,70)
    line(30,0,30,10)
    line(0,30,10,30)
    
    
    stroke('white')
    strokeWeight(15);
   point(150,300);
    point(150,265);
    point(150,282)
    stroke('black')
    strokeWeight(5)
    point(150,300)
    point(150,265)
    point(150,282)
    
    strokeWeight(1);
    stroke('black')
     
  }
function mousePressed(){
   
    faceWidth  = random(120,  160); 
    faceHeight = random(140, 200); 
  
  eyeSize    = random(10,  30); 
  mouthWidth = random (25,65)
    mouthHeight = random(25,65)
  mustacheHeight= random(5,15)
  mustacheWidth= random(20,50)
  eyebrowHeight= random(5,15)
  eyebrowHeight= random(2,10)
  
  
  
}