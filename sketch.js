var canvas;
var backgroundImage;
var bgImg;
var database;
var allPlayers;
var form, player;
var playerCount, car1_img, car2_img;
var gameState, cars = [], car1, car2;
var track;
var obstacle1, obstacle2;
var fuelImg;
var coin;
var fuels,powerCoins ,obstacles;
var blastImage;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  titleImage = loadImage("./assets/title.png");
  car1_img = loadImage("./assets/car1.png");
  car2_img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  obstacle1Image = loadImage("./assets/obstacle1.png");
  obstacle2Image = loadImage("./assets/obstacle2.png");
  fuelImg = loadImage("./assets/fuel.png");
  powerCoin = loadImage("./assets/goldCoin.png");
  resetBtn = loadImage("./assets/reset.png");
  blastImage = loadImage("./assets/blast.png");
  lifeImage = loadImage("./assets/life.png");
}

function setup() {
  database = firebase.database();
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game();
  game.getState();
  game.start();

}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
    console.log("hello");
  }
  if (gameState === 1) {
    game.play();
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
