let bar
let ball
let score = 0
let scoreBoard

function setup() {
  scoreBoard = createElement('p', 'Score: ' + 0)
  createCanvas(600, 400)
  bar = new Bar(100, 5)
  ball = new Ball(15)
}

function draw() {
  background(0)
  bar.show()
  bar.control()
  ball.show()
  ball.update()
  ball.collision()
  scoreBoard.html('Score: ' + score)
}