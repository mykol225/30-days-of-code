class Cell {
  constructor(x,y, size, rColor) {
    this.x = x;
    this.y = y
    this.size = size
    this.rColor = rColor
  }
  printCoor() {
    console.log(this.x,this.y);
  }
  showRect() {
    fill(255, 0, 0)
    strokeWeight(0)
    rect(this.x, this.y, this.size, this.size)
  }

  showCirc() {
    let rand = floor(random(0,255))
    fill(rand, this.rColor, 255)
    strokeWeight(0)
    ellipse(this.x + (size / 2), this.y + (size / 2), this.size-10, this.size-10)
  }
}