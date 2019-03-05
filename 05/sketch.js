var x = 200;
var y = 100;

var x2 = 500;
var y2 = 100;

var xa = 0;
var ya = 0;

var direccion = 1;

var puntaje = 0;

function setup() {
  createCanvas(600, 400);
  // colores aleatorios
  r = random(255);
  g = random(255);
  b = random(255);
  xa = random(0, width);
  ya = random(0, height);
}

function draw() {
  background(puntaje);
  //bolita
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b);
  ellipse(xa, ya, 20, 20);
  //cuadrado negro
  fill(0);
  stroke(255);
  rect(x, y, 20, 20);
  //cuadrado blanco
  fill(255);
  noStroke(0);
  rect(x2, y2, 20, 20);


  //puntaje cuadrado blanco
  print(dist(x, y, xa, ya));
  if (dist(x, y, xa, ya) < 30) {
    xa = random(0, width);
    ya = random(0, height);
    puntaje = puntaje + 10;
  }
  //puntaje cuadrado negro
  print(dist(x2, y2, xa, ya));
  if (dist(x2, y2, xa, ya) < 30) {
    xa = random(0, width);
    ya = random(0, height);
    puntaje = puntaje - 10;
  }
  /*//cambio de color bolita cuando cuadrado blanco
  print(dist(x, y, xa, ya));
  if (dist(x, y, xa, ya) < 30) {
    r = random(255);
    g = random(255);
    b = random(255);
  }
  //cambio de color bolita cuando cuadrado negro ne
  print(dist(x2, y2, xa, ya));
  if (dist(x2, y2, xa, ya) < 30) {
    r = random(255);
    g = random(255);
    b = random(255);
  }*/
	//direcciones cuadrado negro
  if (keyIsPressed == true) {
    if (keyCode == RIGHT_ARROW) {
      x = x + 5;
    }
    if (keyCode == LEFT_ARROW) {
      x = x - 5;
    }
    if (keyCode == UP_ARROW) {
      y = y - 5;
    }
    if (keyCode == DOWN_ARROW) {
      y = y + 5;
    }
  }
	//direcciones cuadrado blanco
  if (keyIsPressed == true){
    if (key == 'd') {
      x2 = x2 + 5;
    }
      if (key == 'a') {
        x2 = x2 - 5;
      }
      if (key == 'w') {
        y2 = y2 - 5;
      }
      if (key == 's') {
        y2 = y2 + 5;
      }
    
  }
  //limites
  if(x>width){
    x = 0;
  }
  if(y>height){
    y = 0;
  }
  
  if(x2>width){
    x2 = 0;
  }
  if(y2>height){
    y2 = 0;
  }
 


  function keyPressed() {
    if (key == ' ') {
      x = x;
	x2 = x2;
	     y = y;
	y2 = y2;
    }
  }
}
