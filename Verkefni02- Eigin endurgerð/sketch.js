function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    
    background(255);
    fill('black')
    rect(25,25,350,350)
    
    fill('#F86410')
    ellipse(90,110,75,75)
    
    fill('rgb(7,95,7)')
    arc(90, 190,100, 90,0, PI,PIE)
    
    fill('white')
    triangle(45, 355, 90, 235, 145, 355)
    
    fill('white')
    rect(145, 190, 25, 165)
    
    fill('yellow')
    triangle(190, 35, 210, 355, 175, 355)
    
    fill('#F86410')
    triangle(210, 355, 240, 235, 265, 355)
    ellipse(240,200,75,75)
    
    fill('white')
    ellipse(240,110,90,90)
    
    fill('#075F07')
    triangle(355, 355, 312, 220, 270, 355)
    
    fill('white')
    arc(360,150,150,150,HALF_PI,PI+HALF_PI,PIE)
    
      fill('#075F07')
  noStroke()
    arc(360,150,130,130,HALF_PI,PI+HALF_PI,PIE)
  }
  