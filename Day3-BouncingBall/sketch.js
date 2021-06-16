
let x;
let y;
let size;
let gravity;
let xSpeed = 5
let ySpeed = 4


function setup() {
  createCanvas(500, 300);
  size = 30
  x = 0
  y = height/2
}

function draw() {
  background(15, 15, 40);
  fill(255)
  strokeWeight(2)
  ellipse(x, y, size, size)
  
  x = x + xSpeed
  if (x > width || x < 0) {
    xSpeed = xSpeed * -1
  }
  y = y + ySpeed
  if (y > height || y < 0) {
    ySpeed = ySpeed * -1
  } else {
    ySpeed += 1

  }

}

//bouncing ball
// ball speed increase incrementially until it hits the height
// when the ball hits the ground the speed reduces incrementally 