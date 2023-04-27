function setup() {
  createCanvas(400,400);
  colorMode(HSB);
  
  fill(0);
  
  frameRate(5);
}

function draw(){
  background(180, 150, 200);
 strokeWeight(1)
  
  for(var i = 200; i>10; i= i-20){
    fill('rgb(0,255,0)');
    quad(280, i,280,i,340,0,400,i );}
    
    fill('brown');
    rect(320,200,30,30);
    
    fill('yellow');
    ellipse(50,60,70,70);
  
    
    fill('#7FCB25')
    rect(0,230,400,50)
  
  
    fill('rgb(255,205,115)');
    rect(0,260,400,70);
    
    fill('#118EF1');
    rect(0,330,400,70);
  

    
  for(var x = 360; x>10; x= x-10){
    strokeWeight(5)
    point(x,200+random(-45,45)) }
 
    
}
  
  