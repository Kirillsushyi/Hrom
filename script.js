
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  draw() {
    image(playerImg, this.x, this.y)
    image(stickImg, this.x + 10, this.y - 5)
  }
}


class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
  }

  draw() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
    // якщо вийшов за межі поля то зараховуємо бали
    // відбиття від країв
    image(ballImg, this.x, this.y)
  }
}

// додати клас для м'яча

// додати меню, скіни 

// зробити керування p2 по мережі

var p1;
var p2;
var playerImg, ballImg, stickImg;
var ball;

function preload() {
  playerImg = loadImage('player.png');
  ballImg = loadImage('Ball.png');
  stickImg = loadImage('stick.png');
}

function setup() {
  createCanvas(windowWidth - 100, windowHeight - 100);

  p1 = new Player(10, 10);
  p2 = new Player(width - 20, 10);
  ball = new Ball(35, 10);
}

function draw() {
  background("green");
  rect(width / 2 - 10, 0, 20, height);

  p1.draw();
  p2.draw();
  ball.draw();

  if (keyIsPressed) {
    if (keyCode === UP_ARROW) {
      p2.y -= 10;
    } else if (keyCode === DOWN_ARROW) {
      p2.y += 10;
    }

    if (key === "w") {
      p1.y -= 10;
    } else if (key === "s") {
      p1.y += 10;
    }
    // додати перевірку на вихід за границі
  }
}

function keyPressed() {
  if (key === ' ') {
    // щоб ця умова спрацьовувала тільки біля гравця (x < 30)
    // if (x y x y)

    var vx = random(0.5, 1)
    var vy = random(-1, 1)

    ball.vx = vx * 2;
    ball.vy = vy * 2;
  }

  if (keyCode === 13) {
    // щоб ця умова спрацьовувала тільки біля гравця (x > width-30)
    // if (x y x y)
    var vx = random(-1, -0.5)
    var vy = random(-1, 1)
    
    ball.vx = vx * 2;
    ball.vy = vy * 2;
  }
}