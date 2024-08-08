let r;
let g;
let b;

function setup() {
  createCanvas(500, 500);
  background(220, 220, 220);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function draw() {
  stroke(r, g, b);
  line(250, 250, mouseX, mouseY);
}

function mouseClicked() {
  clear();
  background(220, 220, 220);

  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}