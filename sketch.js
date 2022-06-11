var hangle;
var mangle;
var sangle;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(250, 250);
  rotate(-90);
  var hr = hour();
  var min = minute();
  var sec = second();
  sangle = map(sec, 0, 60, 0, 360);
  mangle = map(min, 0, 60, 0, 360);
  hangle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(sangle);
  stroke("white");
  strokeWeight(8);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mangle);
  stroke("red");
  strokeWeight(8);
  line(0, 0, 80, 0);
  pop();

  push();
  rotate(hangle);
  stroke("yellow");
  strokeWeight(8);
  line(0, 0, 60, 0);
  pop();

  push();
  noFill();
  strokeWeight(8);
  stroke("white");
  arc(0, 0, 268, 268, 0, sangle);

  stroke("red");
  arc(0, 0, 290, 290, 0, mangle);

  stroke("yellow");
  arc(0, 0, 310, 310, 0, hangle);

  pop();

  drawSprites();
}
