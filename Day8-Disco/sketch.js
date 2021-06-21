const width = 400
const height = 400
const cols = 10
const rows = 10 
const size = 40
let grid;


function setup() {
  createCanvas(width, height);
}

function draw() {
  background(0);
  showGrid()
}

function showGrid() {
  makeGrid()
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++){
      grid[i][j].showCirc()
    }
  }
}

function makeGrid() {
  grid = new Array(rows)
  for (let i = 0; i < rows; i++) {
    grid[i] = new Array(cols)
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i * size,j * size, size, floor(random(0, 255)))
    }
  }
}

//assign the make2darray to a variable 
//in another forloop assign each var[i][j] a new Instance of the class