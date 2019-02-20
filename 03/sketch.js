var x = 0;
var direccion = 1;
var soly = 0;
var nubey = 0;
var vent = 100;
var carx = 0;
var carx2 = 0;

function setup() {
  createCanvas(800, 500);
  soly = height / 2;
}

function draw() {
  background(255);
  noStroke();
 
  
  // cielo
  fill(x / 6, x / 4, 150 + x / 4);
  rect(0, 0, width, height / 2);
  // sol
  fill(100 + x / 2, 100 + x / 4, 0);
  soly = soly - 0.45
  ellipse(3 * width / 4, soly, 200, 200);
  // acera
  fill(146 + x / 12, 141 + x / 12, 140 + x / 12);
  rect(0, height / 2, width, height);
  //arbol
  fill(120 + x / 12, 34 + x / 12, 22 + x / 12);
  quad(400, 250, 405, 150, 425, 150, 430, 250);
  fill(40 + x/6 , 100 + x / 6, 22 + x / 12);
  ellipse(417, 120, 80, 80);
  ellipse(385, 150, 30, 30);
  ellipse(440, 150, 30, 30);
  ellipse(410, 160, 25, 25);
  ellipse(380, 110, 30, 30);
  ellipse(450, 110, 30, 30);
  ellipse(410, 80, 25, 25);
  ellipse(425, 80, 15, 15);
	ellipse(380, 128, 40, 40);
  ellipse(450, 128, 40, 40);
  ellipse(390, 90, 30, 30);
  ellipse(440, 90, 30, 30);

  //sombra arbol
  fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
  quad(400, 250, 400 - x/12, 300 + x/12, 420 - x/12, 300 + x/12, 430, 250);
  ellipse(410 - x/12, 290+ x/12, 20 + x/12, 5 + x/12);
   //edificio 1
 fill(35 + x/6);
  beginShape(0);
  quad(80, 250, 80, 50, 260, 50, 260, 250);
  endShape(CLOSE);
  
  //sombra edificio 1
  fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
  beginShape(0);
  quad(80, 250, 90 - x/6, 300 + x/12, 260 - x/12, 300 + x/12, 260, 250);
  
  //ventanas
  fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
  noStroke(0);
  beginShape(0);
  
  rect(100,70, 140, 5);
  rect(100,80, 140, 5);
  rect(100,90, 140, 5);
  rect(100,100, 140, 5);
  rect(100,110, 140, 5);
  rect(100,120, 140, 5);
  rect(100,130, 140, 5);
  rect(100,140, 140, 5);
  rect(100,150, 140, 5);
  rect(100,160, 140, 5);
  rect(100,170, 140, 5);
  rect(100,180, 140, 5);
  rect(100,190, 140, 5);
  
  //edificio 2
 fill(55 + x/6, 70, 70);
  noStroke(0);
  beginShape(0);
  quad(265, 250, 265, 40, 350, 40, 350, 250);
  endShape(CLOSE);
  
    //sombra edificio 2
  fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
  beginShape(0);
  quad(265, 250, 265 - x/12, 320 + x/12, 350 - x/12, 320 + x/12, 350, 250);
  
  //ventanas edificio 2
  fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
  noStroke(0);
  beginShape(0);
  
  rect(280,60, 10, 10);
 	rect(300,60, 10, 10);
  rect(320,60, 10, 10);
  rect(340,60, 10, 10);
  
  rect(280,80, 10, 10);
  rect(300,80, 10, 10);
  rect(320,80, 10, 10);
  rect(340,80, 10, 10);
  
  rect(280,100, 10, 10);
  rect(300,100, 10, 10);
  rect(320,100, 10, 10);
  rect(340,100, 10, 10);
 
  rect(280,120, 10, 10);
  rect(300,120, 10, 10);
  rect(320,120, 10, 10);
  rect(340,120, 10, 10);
  
  rect(280,140, 10, 10);
  rect(300,140, 10, 10);
  rect(320,140, 10, 10);
  rect(340,140, 10, 10);

  rect(280,160, 10, 10);
  rect(300,160, 10, 10);
  rect(320,160, 10, 10);
  rect(340,160, 10, 10);
  
  rect(280,180, 10, 10);
  rect(300,180, 10, 10);
  rect(320,180, 10, 10);
  rect(340,180, 10, 10);
  
  
  //nubes
  fill(200 + x , 180 + x / 12, 140 + x / 12, 80);
  noStroke(0);
  nubey = nubey + 0.5
  
  ellipse(nubey+240, height/4, 100, 40);
  ellipse(nubey+330, height/4, 80+x/12, 40);
  ellipse(nubey+230, height/6, 110, 30+x/16);
  ellipse(nubey+100, height/7, 110, 10+x/16);
  ellipse(nubey+150, height/8, 90, 10+x/16);
  
  //sombra nubes
  fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
  noStroke(0);
  nubey = nubey + 0.5
  
  ellipse(nubey+240, height - 200 , 100, 40);
  ellipse(nubey+330, height - 200, 80+x/12, 40);
  ellipse(nubey+230, height - 200, 110, 30+x/16);
  ellipse(nubey+100, height - 200, 110, 10+x/16);
  ellipse(nubey+150, height - 200, 90, 10+x/16);
  
  //sombra sol
/*
  if (soly < height / 4) {
    fill(135 + x / 12, 132 + x / 12, 132 + x / 13);
    noStroke(0);
    ellipse(600, x / 12 + 300, 100, x / 8 + 10);
  }
  */
  
   //sombra carro
  //parte de arriba
  rect(30 + carx, 340, 100, 45);
  //parte de abajo
  rect(15 + carx, 310, 150, 45);
  
  //carro
  beginShape(0);
  fill(127 + x / 2, 20, 255);
  carx = carx + 5
  //parte de arriba
  rect(30 + carx, 240, 100, 45);
  //parte de abajo
  rect(15 + carx, 270, 150, 45);
  //ventanas
  fill(100 + x/2);
  rect(40 + carx, 245, 40, 20);
  rect(90 + carx, 245, 30, 20);
  
  //ruedas carro
  fill(0);
  //atras
  ellipse(40 + carx, 310, 30, 30);
  //adelante
  ellipse(130 + carx, 310, 30, 30);
  //interno
  fill(40 + x);
  ellipse(130 + carx, 310, 10, 10);
  ellipse(40 + carx, 310, 10, 10);
  
  //luces
  fill(200 - x/4);
  ellipse(160 + carx, 280, 15, 10);
  
  //carro 2
  beginShape(0);
  fill(10 + x / 12, 56, 0);
  carx2 = carx2 + 2.5
  //parte de arriba
  rect(40 + carx2, 250, 100, 45);
  //parte de abajo
  rect(25 + carx2, 280, 150, 45);
  //ventanas carro2
  fill(100 + x/2);
  rect(50 + carx2, 255, 40, 20);
  rect(100 + carx2, 255, 30, 20);
  //ruedas carro2
  fill(0);
  //atras
  ellipse(50 + carx2, 320, 30, 30);
  //adelante
  ellipse(140 + carx2, 320, 30, 30);
  //interno
  fill(40 + x);
  ellipse(140 + carx2, 320, 10, 10);
  ellipse(50 + carx2, 320, 10, 10);
 
  
  /*
  quad(80 + x/12, 250 - x/12, 90 - x/12, 300 - x/12, 260 - x/12, 300 + x/12, 260 - x/12, 250 - x/12);
  */
  
 
  //pierna de atrás
  stroke(184 + x/8, 164 + x/8, 114 + x/8);
  strokeWeight(10);
  line(110 + x, 380, 100 + x, 420);
  
  //sombra ruedas
  fill(138 + x / 12, 136 + x / 12, 136 + x / 12);
  noStroke(0);
  ellipse(x + 60, 476, 60, 10);

  if ((x >= 0) && (x <= 800)) {
    // Ruedas
    stroke(0);
    strokeWeight(7);
    fill(146 + x / 12, 141 + x / 12, 140 + x / 12);
    ellipse(x + 60, 440, 60, 60);
    ellipse(x + 160, 440, 60, 60);
  }

  //Linas del piso

  noStroke(0);
  fill(245 + x / 2, 220 + x / 4, 61);
  quad(30, 360, 30, 370, 100, 370, 100, 360);
  quad(150, 360, 150, 370, 230, 370, 230, 360);
  quad(280, 360, 280, 370, 360, 370, 360, 360);
  quad(410, 360, 410, 370, 490, 370, 490, 360);
  quad(540, 360, 540, 370, 620, 370, 620, 360);
  quad(670, 360, 670, 370, 750, 370, 750, 360);



  //poste sillin
  stroke(0);
  strokeWeight(5);
  fill(0);
  line(x + 60, 370, x + 70, 390);

  triangle(x + 65, 380, x + 75, 370, x + 55, 370);
  //manubrio
strokeWeight(5);
  line(x + 150, 400, x + 150, 380);
  line(x + 150, 380, x + 160, 380);


  // marco
  stroke(240, 61 + x / 10, 114 + x / 10);
   strokeWeight(4);
  noFill(0);
  triangle(x + 70, 390, x + 110, 450, x + 150, 400);
  line(x + 70, 390, x + 60, 440);
  line(x + 60, 440, x + 110, 450);
  line(x + 150, 400, x + 160, 440);

      
  //cadena
  stroke(0);
  strokeWeight(2);
  line(x+110, 440, x+ 60, 438);
  line(x+110, 460, x+ 60, 442);

  //plato
  stroke(0);
  strokeWeight(3);
  ellipse(x + 110, 450, 20, 20);
  strokeWeight(5);
  point(x + 110, 450);
  strokeWeight(5);
  point(x + 60, 440);
  strokeWeight(5);
  point(x + 160, 440);
  line(108 + x, 430 , 110 + x, 450);
  
  //Persona bici 
  fill(184 + x/8, 164 + x/8, 114 + x/8);
  noStroke(0);
  ellipse(125 + x, 315, 30, 30);
  stroke(184 + x/8, 164 + x/8, 114 + x/8);
  strokeWeight(10);
  line(65 + x, 370, 125 + x, 315);
  
  line(65 + x, 370, 110 + x, 380);
  line(65 + x, 370, 100 + x, 420);
  
  line(110 + x, 330, 150 + x, 375);
  
  fill(160 + x/2, 70, 35);
  noStroke(0);
  beginShape(0);
  quad(135 + x, 305, 77 + x, 350, 65 + x, 345, 112 + x, 305);
  endShape(CLOSE);
  
  fill(23 + x/2, 45, 78);
  noStroke(0);
  ellipse(125 + x, 307, 28, 15);
  
  //ropa persona
  beginShape(0);
  stroke(23 + x/2, 45, 78);
  strokeWeight(14);
  line(65 + x, 370, 80 + x, 390);
  line(110 + x, 330, 130 + x, 353);
  line(110 + x, 330, 70 + x, 365);
  line(65 + x, 370, 105 + x, 375);
  
  stroke(200 + x);
  strokeWeight(10);
  line(100 + x, 420, 108 + x, 430);

  if (x >= 800) {
    x = 0
  }


  x = x + 3 * direccion;
  if ((x > width) || (x < 0)) {
    direccion = direccion * -1;
  }
  
  if (frameCount < 320) {
    if (frameCount % 3 == 0) {
      //saveCanvas("miFlipbook"+frameCount, 'jpg');
    }
  }
  print(frameCount);
  
}
