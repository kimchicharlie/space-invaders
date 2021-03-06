// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/biN3v3ef-Y0

function Rocket(x, y) {
  this.x = x;
  this.y = y;
  this.toDelete = false;

  this.show = function() {
    noStroke();
    fill(255, 255, 255);
    triangle(this.x - 5, this.y + 5, this.x, this.y - 5, this.x + 5, this.y + 5);
  }

  this.evaporate = function() {
    this.toDelete = true;
  }

  this.hits = function(flower) {
    var d = dist(this.x, this.y, flower.x, flower.y);
    if (d <= flower.r) {
      return true;
    } else {
      return false;
    }
  }

  this.move = function() {
    this.y = this.y - 5;
  }

}
