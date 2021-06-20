
let size = 40;
let squares = [];
let x = size * 5;
let y = size * 5;
let angle = 0.04

function setup() {
  createCanvas(size * 11-1, size * 11-1); //get rid of that additional pixel
  background(0);
  strokeWeight(0)
}

function draw() {
  grid()
  // stroke(255,0,0)
  // strokeWeight(2)
  // for (let i = 0; i < squares.length-1; i++) {
  //   let j = i + 1
  //   line(squares[i][0],squares[i][1],squares[j][0],squares[j][1]) //loops through x,y coord of array 
  // }
  // spin()
}

// function spin() {
//   translate(220,220) ;
//   fill(0)
//   rect(-30, -30, 60, 60,) //draw bacground square
//   fill(0,255,0)
//   rotate(angle)
//   rect(-20, -20, 40, 40,) //rotating squaare
//   fill(255) 
//   angle = angle + 0.02    //speed
// }

function grid() {
  rect(x, y, size, size,) // starting/center square
  squares.push([x,y])
  diagonal() //diagonal
  for (let j = 1; j < 6; j++) {
      left(j)
      up(j)
      right(j)
      diagonal()
      down(j)
  }
}

function diagonal() {
  x += size
  y += size
  rect(x, y, size, size)
  squares.push([x,y])
}

function left(j) {
  for (let i = 0; i < j; i++) {
    x -= size * 2
    rect(x, y, size, size)
    squares.push([x,y])
  }
}

function up(j) {
  for (let i = 0; i < j; i++) {
    y -= size * 2
    rect(x, y, size, size)
    squares.push([x,y])
  }
}

function right(j) {
  for (let i = 0; i < j; i++) {
    x += size * 2
    rect(x, y, size, size)
    squares.push([x,y])
  }
}

function down(j) {
  for (let i = 0; i < j; i++) {
    y += size * 2
    rect(x, y, size, size)
    squares.push([x,y])
  }
}



// how to spin each starting from center (beginning of array) 
// I think I need to make an array of rects not coordinates
// then access each one, one at a time, run rotate