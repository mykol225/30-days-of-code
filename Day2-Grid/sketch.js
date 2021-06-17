let cSize = 40 //cell size
let cP1 = ['#000000', '#14213d', '#fca311', '#e5e5e5', '#ffffff']
let cP2 = ['#293241', '#ee6c4d', '#e0fbfc', '#98c1d9', '#3d5a80']
let cP3 = ['#011627', '#fdfffc', '#2ec4b6', '#e71d36', '#ff9f1c']

let col = [cP1, cP2, cP3]




function setup() {
  createCanvas(600, 400);
  background(cP3[0]);
  strokeWeight(0)
  let randPallet = floor(random(3))
  for (let x = 0; x < width; x = x + cSize) {
    for (let y = 0; y < height; y = y + cSize) {
      let randNum = floor(random(5))
      let randColor = floor(random(4))
      randFill(randPallet, randColor)
      randShape(x, y, randNum)
    }
  }
}

function randFill(randPallet, randColor) {
  switch (randColor) {
    case 0:
      fill(col[randPallet][0])
      break;
    case 1:
      fill(col[randPallet][1])
      break;
    case 2:
      fill(col[randPallet][2])
      break;  
    case 3:
      fill(col[randPallet][3])
      break;  
    case 4:
      fill(col[randPallet][4])
      break;    
    default:
      break;
  }
}

function randShape(x, y, randNum) {
  switch (randNum) {
    case 0:
      triangle(x, y, x, y + cSize, x + cSize, y + cSize) //top-left corner
    break;
    case 1:
      triangle(x, y, x + cSize, y, x + cSize, y + cSize) //top-right corner
    break;  
    case 2:
      triangle(x + cSize, y, x + cSize, y + cSize, x, y + cSize) // bottom-right corner
    break;  
    case 3:
      triangle(x + cSize, y + cSize, x, y + cSize, x, y) // bottom-left corner
    break;
    case 4:
      ellipse(x + (cSize/2), y + (cSize/2), cSize/2, cSize/2)
      fill(cP3[0]);
      ellipse(x + (cSize/2), y + (cSize/2), cSize * 0.35, cSize * 0.35)            
      break;
    default:
      break;
  }
}

function draw() {
}





// make grid of squares in 500, 500
// make square shapes
// make color pallet 

