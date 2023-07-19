let points = [];
let pointCount;
let res, pixeCount;
let maxDist;

function setup() {
  res=10;
  pixelCount=createVector(50,50);
  maxDist = 100;
  createCanvas(pixelCount.x*res * 2 +res, pixelCount.y*res);
  
  //initialize points
  pointCount = 5;
  for(let i = 0;i<pointCount;i++){
    points[i] = new MovingPoint();
  }
}


function draw() {
  background(0);

  
  for(let  i= 0;i<pointCount;i++){
    points[i].update();
  }
  
  let secondCanvasOffset = pixelCount.x * res + res;
  strokeWeight(4);
  for(let  i= 0;i<=pixelCount.y;i++){
    for(let j = 0;j<=pixelCount.x;j++){
      
      let sum=0;
      for(let  k= 0;k<pointCount;k++){
        sum += constrain(sq(dist(points[k].posX,points[k].posY,j,i)),0,maxDist);
      }
      sum = sqrt(sum)/pointCount;
      sum = map(sum,0,6,0,1000)%255;
      // draw map
      stroke(255-sum);
      point(j*res,i*res);
      
      // draw graph
      stroke(255,255,0);
      let posY = map(sum,0,500,0,pixelCount.y)+i*0.5;
      point(secondCanvasOffset+j*res,posY*res-50);
      
    }
  }
  
  // text
  noStroke();
  textStyle(BOLD);
  textSize(40);
  fill(255,255,0);
  text("2D Noise",0,pixelCount.y*res-2);
  fill(255);
  text("Representation in 3D",pixelCount.x*res,pixelCount.y*res-2);
  
  //noLoop();
}