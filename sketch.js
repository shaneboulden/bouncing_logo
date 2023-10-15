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

function preload() {
  logo = loadImage("assets/logo.png");
}

function setup() {
  // this creates the initial window and loads the image
  createCanvas(window.innerWidth, window.innerHeight);

  logo.resize(194, 125);
}

function draw() {
  background(0);
  image(logo, coord.x, coord.y);

  // changes x velocity and color when an edge is impacted
  if(coord.x + logo.width > width || coord.x < 0) {
    velocity.x = (-velocity.x);
  }
  coord.x = coord.x + velocity.x;

  // changes y velocity and color when an edge is impacted
  if (coord.y + logo.height > height || coord.y < 0) {
    velocity.y = (-velocity.y);
  }
  coord.y = coord.y + velocity.y
}
