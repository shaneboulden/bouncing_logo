// control + option + l starts live server
let coord = {
  x: 40,
  y: 40
};

let velocity = {
  x: 2,
  y: 2
};

let dvd;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  dvd = loadImage("assets/white_dvd.png");
}

function draw() {
  background(0);
  image(dvd, coord.x, coord.y);

  if(coord.x + dvd.width > width || coord.x < 0) {
    velocity.x = (-velocity.x);
  }
  coord.x = coord.x + velocity.x;
  if (coord.y + dvd.height > height || coord.y < 0) {
    velocity.y = (-velocity.y);
  }
  coord.y = coord.y + velocity.y
}
