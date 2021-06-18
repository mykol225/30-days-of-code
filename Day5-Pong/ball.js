class Ball {
  constructor(size) {
    this.size = size
    this.x = floor(random(50, width-50))
    this.y = floor(random(100, height-50))
    this.speed = 5
    this.sX = this.speed * 1
    this.sY = this.speed * -1
    this.delta = 0.2
    // this.col = 255
  }

  show() {
    fill(255)
    stroke(255,0,0);
    strokeWeight(0)
    ellipse(this.x,this.y, this.size, this.size)
  }

  update(){
    this.x += this.sX
    this.y += this.sY
    if (this.x >= width || this.x <= 0) {
      this.sX *= -1
    }
    if (this.y <= 0) {
      this.sY *= -1
    } else if (this.y >= height) { //hits bottom
      this.sY *= -1 //to start in correct direction after reset
      this.x = floor(random(50, width-50))
      this.y = floor(random(100, height-50))
      background(255)
      this.sY = this.speed * -1
      this.sX = this.speed * (random() < 0.5 ? -1 : 1)
      score -= 1
    }
  }

  collision() {
    if (this.x < bar.x + bar.w &&
        this.x + (this.size/2) >  bar.x &&
        this.y < bar.y + bar.h &&
        this.y + (this.size/2) > bar.y) {
      this.sY += this.delta //speeds up Y by delta
      if (keyIsPressed === true &&
          keyCode === LEFT_ARROW &&
          this.sX < 0) { //going left
        this.sX -= this.delta //speeds up X by delta
      } else if (keyIsPressed === true &&
                 keyCode === LEFT_ARROW &&
                 this.sX > 0) { //going right
        this.sX -= this.delta //slows down X by delta
      }
      if (keyIsPressed === true &&
          keyCode === RIGHT_ARROW &&
          this.sX < 0) { //going left
        this.sX += this.delta //speeds up Y by delta
      } else if (keyIsPressed === true &&
                 keyCode === RIGHT_ARROW &&
                 this.sX > 0) { //going right
        this.sX += this.delta //slows down X by delta
      }
      this.sY *= -1 //flips Y direction
      score += 1
      bar.collision()
    }
    bar.fade() //continously runs fade()
  }
}

