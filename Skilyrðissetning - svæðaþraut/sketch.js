function setup() {
  createCanvas(400,400);
  frameRate(5);
}

function draw() {
  background(15);
  fill(200,0,20, 85);
  
  if(mouseX > width/2){ 
    if(mouseY > height/2){
      for(var i = 1; i< 200;i = i+1) {
              
                  
      ellipse(random(width/2,width),random(height/2,height),        random(30),random(30)); 
      }                            
     }
    else{ 
      for(var j = 1; j< 300;j = j+1){
              ellipse(random(width/2,width),random(height/2),random(30),random(30));
      }
     }
     }
    
    
   
  
    if(mouseY<200){
      for(var i = 1; i< 300;i = i+1){
        
      ellipse(random(width/2),random(height/2,height),random(30),random(30))
        }  
      }  
      
       
     
     
  
 
    else{ 
      for(var j = 1; j< 300;j = j+1){
                         
        ellipse(random(0,200),random(height/2),random(30),  random(30))
     
  }
  }
      
 
   
  
    
  }
    