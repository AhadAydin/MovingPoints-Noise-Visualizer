class MovingPoint{

  constructor(){
    this.posX=round(random(0,pixelCount.x));
    this.posY=round(random(0,pixelCount.y));
    this.moveX=random(4,10);
    this.moveY=random(4,10);
  }
  
  update(){
    strokeWeight(8);
    stroke(255);
    point(this.posX*res,this.posY*res);
    
    if(this.posX > 0 && this.posX < pixelCount.x){
      this.posX+=this.moveX*0.1;
    }else{
      this.moveX *= -1;
      this.posX+=this.moveX*0.1;
    }
    
    if(this.posY > 0 && this.posY < pixelCount.y){
      this.posY+=this.moveY*0.1;
    }else{
      this.moveY *= -1;
      this.posY+=this.moveY*0.1;
    }
  }

}