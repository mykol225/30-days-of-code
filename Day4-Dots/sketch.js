let x = 0;
let y = 10;
let activePallet;
let c1 = ['#fffdeb', '#011627', '#2ec4b6', '#e71d36', '#ff9f1c']
let c2 = ['#000000', '#14213d', '#fca311', '#e5e5e5', '#ffffff']
let c3 = ['#293241', '#ee6c4d', '#e0fbfc', '#98c1d9', '#3d5a80']
let b1, b2, b3;
activePallet = c1
let bg;

function setup() {
  
  createCanvas(500, 400);
  background(255);


  b1 = createButton('Summer')
  b1.position(440, 50)
  b1.mousePressed(switchPallet1)

  b2 = createButton('Space')
  b2.position(440, 100)
  b2.mousePressed(switchPallet2)


  b3 = createButton('Vintage')
  b3.position(440, 150)
  b3.mousePressed(switchPallet3)



  for (let x = 15; x < (width-100); x += 15) {
    for (let y = 15; y < height; y += 15) {
      fill(activePallet[floor(random(0,5))])
      strokeWeight(0)
      ellipse(x, y, random(1,5)*2)
    }
  }
}

function draw() {
}



function switchPallet1() {
  activePallet = c1
  setup()
}
function switchPallet2() {
  activePallet = c2
  setup()
}
function switchPallet3() {
  activePallet = c3
  setup()
}

// each button has a spceific color array attached to it, based on params (Pallet 1, 50, c1)
// if pressed change activePallet to that param