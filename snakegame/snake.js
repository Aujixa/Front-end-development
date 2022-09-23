/*
snake javascript Page of Kayven's website
ST0501: Front-End Web Development
CA2:Interactive Website
File Name: snake.js
Author: Kayven Chieng Yan Heng
Date:  29/07/2022
Class: DCITP/FT/1A/02
Student ID:P2222639
*/



function Snake() {//assignment of different variables
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
    
    this.dir = function(x,y) {//setting speed position of snake using this.variables
      this.xspeed = x;
      this.yspeed = y;
    }
    
    this.eat = function(pos) {//calculate dist between this.x and pos.x and this.y and pos.y
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d < 1){
        this.total++;
        return true;
      } else {
        return false;
      }
    }

    this.death = function() {//reset the snake length to one block once snake dies
      for(var i = 0;i < this.tail.length;i++) {
        var pos = this.tail[i];
        var d = dist(this.x,this.y,pos.x,pos.y);
        if(d < 1) {
          console.log("starting over");//printing restart + empty array of length which removes any existing block build up on the snake
          this.total = 0;
          this.tail = [];
        }
      }
    }
          
    this.update = function() {//to increase length of snake by one block using array in for loop
      if(this.total === this.tail.length) {
  for( var i = 0; i < this.tail.length-1;i++) {
    this.tail[i] = this.tail[i + 1];
  }
      }
      this.tail[this.total-1] = createVector(this.x,this.y);//adjusting speed of snake
      this.x = this.x + this.xspeed*scl;
      this.y = this.y + this.yspeed*scl;
      this.x = constrain(this.x,0,width-scl) ;//max width of x-axis
      this.y = constrain(this.y,0,height-scl);//max height of y-axs
      
    }
    
    this.show = function () {//to ensure that total length of snake do not dissapear
      fill(255);
      for(var  i = 0;i < this.total;i++ ) {
            rect(this.tail[i].x,this.tail[i].y, scl, scl);
      }
      rect(this.x,this.y, scl, scl);
    }
  }