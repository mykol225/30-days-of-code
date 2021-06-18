class Bar {
  constructor(w,h) {
    this.x = width / 2;
    this.y = height - 30;
    this.w = w;
    this.h = h;
    this.speed = 10
    this.color = color(255, 255, 255)
    this.col = 255
  }

  show() {
    fill(this.color)
    strokeWeight(0)
    rect(this.x, this.y, this.w, this.h)
  }

  control() {
    if( keyIsPressed === true &&
        keyCode === RIGHT_ARROW &&
        this.x + this.w < width) {
      this.x += this.speed //increase x by speed
    } else if ( keyIsPressed === true &&
                keyCode === LEFT_ARROW && 
                this.x > 0){
      this.x -= this.speed //decrease x by speed
    }
  }

  collision() {
    this.col = 0
    this.color = color(this.col,255,this.col)
  }

  fade() {
    if (this.col < 255) {
      this.col += 20
      this.color = color(this.col,255,this.col)
    }
  }
}