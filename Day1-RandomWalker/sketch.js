let x;
let y;

h = 0


function setup() {
  createCanvas(500, 500);
  background(50);
  x = 250
  y = 250
}

function draw() {
  colorMode(HSB)
  h < 359 ? h++ : h = 0
  stroke(h, 255, 255)
  strokeWeight(4)
  point(x, y)
  move()

}



function move() {
  let r = floor(random(4))
  switch (r) {
    case 0:
      y = y + 5
      break;
    case 1:
      y = y - 5
      break;
    case 2:
      x = x + 5
      break;
    case 3:
      x = x - 5
      break;
  
    default:
      break;
  }
}


// up: y-1, down: y+1, left: x-1, right: x+1
// if 0 y++, 1 y--, x++, x-- 
