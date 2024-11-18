let applaud = [];
let stage;
let luka;
let mikupic1;
let mikupic2;
let mikupic3;

function preload(){
    stage = loadImage('stage.jpg');
		luka = loadImage('lukastage.png')
    mikupic1 = loadImage('emote1.png');
    mikupic2 = loadImage('emote2.webp');
    mikupic3 = loadImage('emote3.webp');

}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  image(stage, -120, 0, 700, 500);
	image(luka, 140, 60, 170, 270);

  if (mouseIsPressed) {
    applaud.push(new Applaud(mouseX, mouseY));
  }

  
  for (let i = applaud.length - 1; i >= 0; i--) {
    applaud[i].display();

    
    if (applaud[i].x < 0 || applaud[i].x > width || applaud[i].y < 0 || applaud[i].y > height) {
      applaud.splice(i, 1);
    }
  }
}

class Applaud {
  constructor(x, y) {
    this.x = x;
    this.y = y;

   
    this.speedX = random(-3, 3);
    this.speedY = random(-3, 3);
  }

  display() {
    
    image(mikupic1, this.x, this.y, 25, 25);
    image(mikupic2, this.x/2, this.y, 25, 25);
    image(mikupic3, this.x, this.y/3, 25, 25);

    
    this.x += this.speedX;
    this.y += this.speedY;
  }
}