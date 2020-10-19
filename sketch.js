// var b1;
// var b2;
// var b2;

var bubbles = [];
var bubblesa = [];
var bubblesb = [];

var weightA = 0.75;
    var weightao = 0
    var weightai = 0;
var weightB = 0.75;
    var weightbo = 0;
    var weightbi = 0;
var weightC = 0.75;
    var weightco = 0;
    var weightci = 0;



function setup(){
  createCanvas(windowWidth, windowHeight);
   for (var i = 0; i<50; i++){
     bubbles[i] = new Bubble(randomGaussian(windowWidth/2, 50), randomGaussian(windowHeight/2,50), random(1,3), random(0.1), 255,255,0, /* for a random ass explosion uncomment speed as follows: randomGaussian(random(-7, 7), 2), randomGaussian(random(-7, 7), 2)*/random(-0.5,0.5), random(-0.5,0.5), weightA,weightao,weightai, 10, width-10, 10, height-10);
   }
    for (var d = 0; d<50; d++){
       bubblesa[d] = new Bubble(randomGaussian(windowWidth/4, 50), randomGaussian(windowHeight/2,50), random(1,3), random(0.1), random(100,255),0,0, /* for a random ass explosion uncomment speed as follows: randomGaussian(random(-7, 7), 2), randomGaussian(random(-7, 7), 2)*/random(-0.5,0.5), random(-0.5,0.5), weightB,weightbo,weightbi), 10, width-10, 10, height-10; 
    }
    for (var k = 0; k<50; k++){
        bubblesb[k] = new Bubble(randomGaussian((windowWidth/4)*3, 50), randomGaussian(windowHeight/2,50), random(1,3), random(0.1), 0,0,random(100,255), /* for a random ass explosion uncomment speed as follows: randomGaussian(random(-7, 7), 2), randomGaussian(random(-7, 7), 2)*/random(-0.5,0.5), random(-0.5,0.5), weightC,weightco,weightci, 10, width-10, 10, height-10);
   }
    
  }

function draw(){
background(0);
//for(var i = bubbles.length; i>0;i--){    
for(var i = 0; i<bubbles.length; i++){
     bubbles[i].update();
    bubbles[i].display();
    // bubbles[i].bound();
    


   // for (var j = bubbles.length; j>=0;j--){
    for (var j = 0; j < bubbles.length; j++){
      if( i != j && bubbles[i].intersects(bubbles[j])){
         weightA += 1;
          bubbles[i].changeColorW();
        bubbles[j].changeColorW();
         //bubbles[i].connect();
          //bubbles[j].connect();
         }
        if( bubbles[i].intersects(bubblesa[j])){
          weightao += 1;
          bubbles[i].changeColorY();
        bubbles[j].changeColorY();
      }
        if( bubbles[j].intersects(bubblesb[j])){
          weightai +=1;
        bubbles[i].changeColor();
        bubbles[j].changeColor();
//        stroke(255);
//          line(bubbles[i].x, bubbles[i].y, bubbles[j].x, bubbles[j].y);
        //bubbles[i].connect();
          //bubbles[j].connect();
      }
    }
}
        
    for(var d = 0; d<bubblesa.length; d++){

    bubblesa[d].update();
    bubblesa[d].display();
//    bubblesa[d].bound();



    for (var t = 0; t < bubblesa.length; t++){
      if( d != t && bubblesa[d].intersects(bubblesa[t])){
         weightB += 1;
             bubblesa[d].changeColorY();
        bubblesa[t].changeColorY();
         }
        if( bubblesa[d].intersects(bubbles[t])){
          weightbo +=1;
          
          bubblesa[d].changeColorW();
        bubblesa[t].changeColorW();
      }
        if( bubblesa[d].intersects(bubblesb[t])){
          weightbi +=1;
        bubblesa[d].changeColor();
        bubblesa[t].changeColor();
//        stroke(255);
//          line(bubblesa[d].x, bubblesa[d].y, bubblesa[j].x, bubblesa[j].y);
        //bubbles[i].connect();
          //bubbles[j].connect();
      }
    }
    }
    
    
            for(var k = 0; k<bubblesb.length; k++){
     bubblesb[k].update();
    bubblesb[k].display();
//    bubblesb[k].bound();



    for (var w = 0; w < bubblesb.length; w++){
      if( k != w && bubblesb[k].intersects(bubblesb[w])){
          weightC += 1;
          bubblesb[k].changeColor();
        bubblesb[w].changeColor();
      }
        if( bubblesb[k].intersects(bubbles[w])){
          weightco +=1;
          bubblesb[k].changeColorW();
        bubblesb[w].changeColorW();
      }
        if( bubblesb[k].intersects(bubblesa[w])){
          weightci += 1;
        bubblesb[k].changeColorY();
        bubblesb[w].changeColorY();
//        stroke(255);
//          line(bubblesb[k].x, bubblesb[k].y, bubblesb[j].x, bubblesb[j].y);
        //bubbles[i].connect();
          //bubbles[j].connect();
      }
    }
  }
}



// b1.display();
// b1.update();
// b1.bound();

// b2.display();
// b2.update();
// b2.bound();

// b3.display();
// b3.update();
// b3.bound();

// if (b1.intersects(b2)){
//   b1.changeColor();
//   b2.changeColor();
// }
// if (b1.intersects(b3)){
//   b1.changeColor();
//   b3.changeColor();
// }
// if (b3.intersects(b2)){
//   b3.changeColor();
//   b2.changeColor();
// }





// var bubbles = [];

// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   // for (var i = 0; i < 1000; i++) {
//   //   bubbles[i] = new Bubble(windowWidth/2, windowHeight/2);
//   // }
// }

// function mouseDragged(){
//   bubbles.push(new Bubble(mouseX, mouseY));
// }

// function mouseReleased(){
//     for (var i = bubbles.length-1; i >= 0; i--) { //reverse for gradual fade
//     bubbles[i].clicked();
//   }
// }

// function draw() {
//   smooth();
//   frameRate(20);
//   background(15, 15, 10);
//   for (var i = 0; i < bubbles.length; i++) {
//     bubbles[i].display();
//     bubbles[i].bound();
//     bubbles[i].update();
//     if (bubbles[i].isFinished()){
//       bubbles.splice(i,1);
//     }
//   }
// }

// console.log(bubbles);