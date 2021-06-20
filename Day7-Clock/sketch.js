let hr, min, sec, milSec;
let outerArc = 300; 
let innerArc = 150; 
let gap = 10
let bkg = 25 //0-155


function setup() {
  createCanvas(400, 400);
}

function draw() {
  //check time every draw
  hr  = new Date().getHours()
  min = new Date().getMinutes()
  sec = new Date().getSeconds()
  milSec = new Date().getMilliseconds()

  // fill background for aniamtion
  background(0);

  // print digital clock 
  showDigital()

  // center and rotate clock arcs
  translate(width / 2, height / 2); //move origin to center
  rotate(PI+HALF_PI); //set zero to top

  // draw each arc
  // 2 * PI is a full circle, divide by number of digits in time, times the current time
  // adding 0.001 makes sure it's not zero (gone)
  hoursHand(0, ((2 * PI) / 12) * hr + (((2*PI)/720) * min) + 0.001)
  minutesHand(0, ((2 * PI) / 60) * min + (((2*PI)/3600) * sec) + 0.001)
  secondsHand(0, (((2 * PI) / 60) * sec + 0.001) + (((2 * PI) / 60000) * milSec)) //smoothed seconds
  millHand(0,((2 * PI) / 1000) * milSec )
}

function hoursHand(start, stop) {
  let dmt = outerArc
  noFill()
  strokeWeight(((outerArc - innerArc) /6) - gap /2) 
  strokeCap(ROUND)
  stroke(bkg);
  arc(0,0,dmt,dmt, 0, (2*PI)) 
  stroke(255, 0, 200);
  arc(0,0,dmt,dmt, start, stop) 
}

function minutesHand(start, stop) {
  let dmt = (((outerArc - innerArc) / 3 ) * 2 ) + innerArc
  noFill()
  strokeWeight(((outerArc - innerArc) /6 ) - gap /2)
  strokeCap(ROUND)
  stroke(bkg);
  arc(0,0,dmt,dmt, 0, (2*PI)) 
  stroke(50, 50, 200);
  arc(0,0,dmt,dmt, start, stop) 
}

function secondsHand(start, stop) {
  let dmt = ((outerArc - innerArc) / 3 ) + innerArc
  noFill()
  strokeWeight(((outerArc - innerArc) /6 ) - gap /2)
  strokeCap(ROUND)
  stroke(bkg); 
  arc(0,0,dmt,dmt, 0, (2*PI)) 
  stroke(0, 200, 100);
  arc(0,0,dmt,dmt, start, stop) 
}

function millHand(start, stop) {
let dmt = innerArc
noFill()
strokeWeight(((outerArc - innerArc) /6 ) - gap /2)
strokeCap(ROUND)
stroke(bkg);
arc(0,0,dmt,dmt, 0, (2*PI)) 
stroke(255, 255, 0);
arc(0,0,dmt,dmt, start, stop) 
}

function showDigital() {
  let hrs = hr > 12 ? hr-12 : hr //regular time converstion
  strokeWeight(0);
  textSize(20);
  textAlign(CENTER, CENTER)
  fill(100);
  text(hrs + ":" + twoDigits(min) + ":" + twoDigits(sec), width/2, height/2);
}

function twoDigits(n) {
  return (n < 10 ? '0' : '') + n;
}