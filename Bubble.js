function Bubble(x, y, rad, Y, r,g,b, xspeed, yspeed, weight, weightO, weightI, constrainXHi, constrainXLo, constrainYHi, constrainYLo) {
//  this.x = x;//windowWidth / 2; //random(0,width);
//  this.y = y;//windowHeight / 2; //random(0,height);
    this.location = createVector(x, y/*this.x, this.y*/);
//  this.xspeed = 1;
//  this.yspeed = 1;

    
    this.velocity = createVector(xspeed, yspeed);
    // this.acceleration = createVector(-0.001, 0.01);
  //this.topspeed = 10; 
//  this.lifespan = 255;
  this.col = color(r,g,b);
    //this.cola = color(r,g,b);
    //this.colb = color(r,g,b);
  this.rad = rad;
    this.Y = Y
    this.weight = weight;
    this.weightO = weightO;
    this.weightI = weightI;


//     this.constrainx = function(){ constrain(this.x,constrainXLo, constrainXHi);
//                                 }
//     
//    this.constrainy = function(){ constrain(this.y,constrainYLo, constrainYHi);
//                                }

  this.display = function() {
//      constrain(this.location.x, constrainXLo, constrainXHi);
//      constrain(this.location.y, constrainYLo, constrainYHi);
//      
//         if (this.location.x >= constrainXHi) {
//      this.velocity.x *= -1;
//    } 
//    
//    if (this.locaiton.x <= constrainXLo) {
//      this.velocity.x *= -1;
//    }
//     if (this.location.y >= constrainYHi) {
//      this.velocity.y *= -1;
//    }
//     if (this.location.y <= constrainYLo) {
//      this.velocity.y *= -1;
//    }
    
    stroke(this.col);
    fill(this.col);
    ellipse(this.location.x, this.location.y, this.rad*2, this.rad*2);

  };
  
  this.changeColorW = function(){
    //this.col = color(random(230,255), random(230,255), random(230,255));
    this.col = color(random(230,255), random(230,255), 0);
      
  };
    
      this.changeColorY = function(){
    this.col = color(random(230,255), 0, 0);
      
  };
    
      this.changeColor = function(){
    this.col = color(0, 0, random(100,255));
      
  };
  
    this.connect = function(other){
        //stroke(255);
       // line(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y);
    }
    
  this.intersects = function(other){
    var d = dist(this.location.x, this.location.y, other.location.x, other.location.y);
    if(d <this.rad + other.rad + 2){
      return true;
    }else{
      return false;
    }
    
  }

  this.avoid = function(other){
      this.x
  }
  
// this.clicked = function(){
//   this.col = color(20, randomGaussian(255,255), 90, this.lifespan);
// }

  this.isFinished = function() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  this.update = function() {
    //this.x += randomGaussian(random(-7, 7), 2);
    //this.y += randomGaussian(random(-7, 7), 2);
    //      this.velocity.add(this.acceleration);
  //  this.velocity.limit(this.topspeed);
        this.location.add(this.velocity);
        this.rad += random(-Y,Y);
    
    //this.lifespan--;
  };

  this.bound = function() {
    if (this.location.x >= windowWidth - 40) {
      this.velocity.x *= -1;
    } else{   //??
      this.update();
      this.display();
    }
    if (this.locaiton.x <= 40) {
      this.velocity.x *= -1;
    }
    if (this.location.y >= windowHeight - 40) {
      this.velocity.y *= -1;
    }
    if (this.location.y <= 40) {
      this.velocity.y *= -1;
    }
  };
};