 class Dustbin{

  constructor(x,y){

    this.x = x;
    this.y = y;

    this.dustbinWidth=200;
	this.dustbinHeight=215;
	this.wallThickness=20;

    this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
	this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
    this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
		this.image = loadImage("dustbingreen.png");
        World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
  }


  display(){
      var bottomPos = this.bottomBody.position;
      var leftWallBodypos = this.leftWallBody.position;
      var rightWallBodypos = this.rightWallBody.position;

                push()
			translate(leftWallBodypos.x, leftWallBodypos.y);
		    imageMode(CENTER)
			//strokeWeight(4);
			//angleMode(RADIANS)
			//fill("red")
			//stroke(255)
			//rotate(this.angle)
			image(this.image,0,-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight);
            pop();
            

            push()
			translate(rightWallBodypos.x, rightWallBodypos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			//stroke(255)
			//angleMode(RADIANS)
			//fill("red")
			//rotate(-1*this.angle)
			image(this.image,0,-this.dustbinHeight/2,this.wallThickness, this.dustbinHeight);
            pop()
            

            push()
			translate(bottomPos.x, bottomPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
		
			image(this.image,0,-this.dustbinHeight/2,this.dustbinWidth, this.wallThickness);
			pop()
  }


 }