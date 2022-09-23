/*
sketch.js Page of Kayven's website
ST0501: Front-End Web Development
CA2:Interactive Website
File Name: sketch.js
Author: Kayven Chieng Yan Heng
Date:  29/07/2022
Class: DCITP/FT/1A/02
Student ID:P2222639
*/



var snake;
var scl = 20;
var food;
function setup() {/*Setting of game grid*/
  createCanvas(600,600);
  snake = new Snake();
  frameRate(20);
  pickLocation();
}

/*Allocate random location for apple to appear*/
function pickLocation()  {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

/*Action everytime mouse is pressed*/ 
function mousePressed() {
  snake.total++;
}

/*Show appearance of snake and apple*/
function draw() {
  background(51);
  snake.update();
  snake.death();
  snake.show();
  if (snake.eat(food)) {
    pickLocation();
  }
  fill(255,0,100);
  rect(food.x,food.y,scl,scl)
}
/*Keyboard buttons to move snake from user input */
function keyPressed() {
  if(keyCode === UP_ARROW) {
    snake.dir(0,-1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0,1);
  }
  else if (keyCode === RIGHT_ARROW) {
    snake.dir(1,0);
  }
  else if (keyCode === LEFT_ARROW) {
    snake.dir(-1,0);
  }
}
