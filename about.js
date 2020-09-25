var w;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);

  w = new Walker();
}


function draw() {
	
   w.step();
   w.render();

}

function Walker(){

	this.x = windowWidth/2;
	this.y = windowHeight/2;

	this.render = function(){
        var c = [0,0,255]
        if (random(0,1) > 0.5) c = [255,0,0]
		// stroke(255); //greyscale
		//stroke(0,0,255);
		stroke(c);
		// stroke(0,200,0);
		 strokeWeight(random(0.3,0.75));

 		 //line(this.x, this.y, this.x+random(20,150), this.y);
 		 line(this.x, this.y, this.x, this.y+random(20,150));
 		 noFill();
 		 //point(this.x, this.y, this.x+random(20,150), this.y); //make a little head for the streams
 		 //line(this.x,this.y, this.x, this.y+random(20,150));//to make corners
	}

	this.step = function(){
		//var dist = 
		var choice = floor(random(-1,1));
		var probability = choice;
		var choice2 = floor(random(-1,1));
		if(choice2 < probability){
			this.x =randomGaussian(windowWidth/2,windowWidth/6);
			this.y= randomGaussian(windowHeight/2,windowHeight/8);
		}/*for more noticable gradients comment out this else statment*/
		// else{
		// 	this.x = windowWidth/2;
		// 	this.y = windowHeight/2
		// }
		//this.x = constrain(this.x,0,width-1);
		//this.y = constrain(this.y,0,height-1);
	}
}
