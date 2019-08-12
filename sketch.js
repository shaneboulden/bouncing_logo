// control + option + l starts live server
let coord = {
  x: 40,
  y: 40
};

let velocity = {
  x: 2,
  y: 2
};

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(0);
  ellipse(coord.x, coord.y, 50, 50);

  if(coord.x + 25 > width || coord.x - 25 < 0) {
    velocity.x = (-velocity.x);
  }
  coord.x = coord.x + velocity.x;
  if (coord.y + 25 > height || coord.y - 25 < 0) {
    velocity.y = (-velocity.y);
  }
  coord.y = coord.y + velocity.y
}
