let i = 1n;
let x = 3n * (10n ** 1020n);
let pi = x;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255)
  textSize(15)
  text("PI", 10,40)
    x = x * i / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;

  text(pi / (10n ** 20n), 10,80)
}


// this project was a failure
// I tried 3 different methods of calculating Pi
// with all three I was unable to figure out a solution
// I've run out of time, so this was essentially
// a wholsale copy and paste