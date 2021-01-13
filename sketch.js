var hrs;
var min;
var sec;

hrs = hours();
min = minutes();
sec = seconds();


function setup() {
  createCanvas(400,400);
  angleMode(DEGREE);
 
}

function draw() {
  background(255,255,255); 
hrs = hours();
min = minutes();
sec = seconds();
  
push();
scAngle = map(sc,0,60,0,360);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
  drawSprites();
}