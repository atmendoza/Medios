function setup() {
  createCanvas(400, 400);
  background(255);
	
	//Fondo
  fill(163,127,66);
  noStroke();
  beginShape();
    vertex(0,0);
    vertex(0,200);
    vertex(150,200);
    vertex(200,170);
    vertex(200,120);
    vertex(150,0);
    endShape(CLOSE);
  
  
    
  //triángulo marrón inferior
  fill(196,112,69);
  noStroke();
  triangle(77,157,100,200,25,200);
  
  //triángulo amarilla al interior del inferior
  fill(252,237,95);
  noStroke();
  triangle(47,185,48,200,38,200);
	
  
  
	//Figura negra central
	fill(0,0,0);
  noStroke();
  beginShape();
    vertex(0,60);
    vertex(15,85);
    vertex(45,43);
    vertex(70,63);
    vertex(90,50);
    vertex(109,56);
		vertex(77,80);
		vertex(85,85);
		vertex(165,200);
		vertex(150,200);
		vertex(80,115);
		vertex(45,115);
		vertex(0,160);
		vertex(0,115);
		vertex(0,93);
		vertex(7,88);
		vertex(0,90);
    endShape(CLOSE);
  
 
	
	//circulo negro grande
  noStroke(0);
  fill(0,0,0);
  ellipse(110,0,120, 120);


	//circulo branco al interior del negro grande
  noStroke(0);
  fill(250,250,250);
  ellipse(110,0,90,90);
  
   //triángulo al interior de la figura negra
  fill(163,127,66);
  noStroke();
  beginShape();
  vertex(50,115);
  vertex(0,145);
  vertex(0,115);
  
  //cuadro 1
  fill(250,250,250);
  stroke(0,0,0);
  rect(135,80,20,20);
	//cuadro 2
  fill(250,250,250);
  stroke(0,0,0);
  rect(155,80,20,20);
   //cuadro 3
  fill(250,250,250);
  stroke(0,0,0);
  rect(175,80,20,20);
   //cuadro 4
  fill(250,250,250);
  stroke(0,0,0);
  rect(195,80,20,20);
   //cuadro 5
  fill(250,250,250);
  stroke(0,0,0);
  rect(135,100,20,20);
  //cuadro 6
  fill(0,0,0);
  rect(155,100,20,20);
  //cuadro 7
  fill(250,250,250);
  stroke(0,0,0);
  rect(175,100,20,20);
  //cuadro 8
  fill(250,250,250);
  stroke(0,0,0);
  rect(195,100,20,20);
  //cuadro 9
  fill(250,250,250);
  stroke(0,0,0);
  rect(135,120,20,20);
  //cuadro 10
  fill(250,250,250);
  stroke(0,0,0);
  rect(155,120,20,20);
  //cuadro 11
  fill(250,250,250);
  stroke(0,0,0);
  rect(175,120,20,20);
  //cuadro 12
  fill(250,250,250);
  stroke(0,0,0);
  rect(195,120,20,20);
  //cuadro 13
  fill(250,250,250);
  stroke(0,0,0);
  rect(135,140,20,20);
  //cuadro 14
  fill(0,0,0);
  stroke(0,0,0);
  rect(155,140,20,20);
  //cuadro 15
  fill(250,250,250);
  stroke(0,0,0);
  rect(175,140,20,20);
  //cuadro 16
  fill(250,250,250);
  stroke(0,0,0);
  rect(195,140,20,20);
  
  //puntos cuadro 1
  point(140,85);
  point(137,83);
  point(142,87);
  point(143,89);
  point(146,91);
  point(147,93);
  point(150,95);
  point(152,97);
  
  point(150,85);
  point(152,83);
  point(148,87);
  point(146,89);
  point(146,91);
  point(137,93);
  point(140,95);
  point(132,97);
  point(145,93);
  point(145,90);
  point(145,88);
  point(145,86);
  point(145,84);
  point(145,82);
  point(145,80);
  
  
  
  point(142,93);
  point(142,91);
  point(145,90);
  
  point(140,97);
  point(142,97);
  point(145,97);
  point(148,97);
  
  //lineas cuadro 9
  line(138,120,138,140);
  line(140,120,140,140);
  line(142,120,142,140);
  line(144,120,144,140);
  line(146,120,146,140);
  line(148,120,148,140);
  line(150,120,150,140);
  line(152,120,152,140);
  
  //lineas cuadro 8
  line(198,100,198,120);
  line(200,100,200,120);
  line(202,100,202,120);
  line(204,100,204,120);
  line(206,100,206,120);
  line(208,100,208,120);
  line(210,100,210,120);
  line(212,100,212,120);
  //paralelas
  line(195,102,214,102);
  line(195,105,214,105);
  line(195,107,214,107);
  line(195,109,214,109);
  line(195,111,214,111);
  line(195,113,214,113);
  line(195,115,214,115);
  line(195,117,214,117);
  
  //lineas cuadro 16
  line(200,140,200,150);
  line(198,140,198,155);
  line(196,140,196,158);
  line(210,140,210,153);
  line(212,140,212,155);
  line(208,140,208,150);
  line(206,140,206,155);
  line(204,140,204,151);
  line(202,140,202,148);
  
  //corona roja
  noStroke();
  fill(217,68,35);
  beginShape();
  vertex(57,52);
  vertex(55,47);
  vertex(60,46);
  vertex(63,43);
  vertex(67,47);
  endShape(CLOSE);
  
  //triangulo blanco con cuadro amarillo andentro
  noStroke(0);
  fill(255,255,255);
  beginShape();
  vertex(71,45);
  vertex(110,80);
  vertex(100,90);
  endShape(CLOSE);
  
  //cuadro amarillo adentro de triangulo blanco
  noStroke(0);
  fill(242,187,19);
  beginShape();
  vertex(95,65);
  vertex(88,73);
  vertex(78,55);
  vertex(83,55);
  endShape(CLOSE);
  
  //triangulo blanco con cusdrado rojo adentro
  noStroke(0);
  fill(255);
  beginShape();
  vertex(75,130);
  vertex(70,145);
  vertex(22,123);
  endShape(CLOSE);
  
  //cuadrado rojo adentro de triangulo blanco
  noStroke(0);
  fill(217,68,35);
  beginShape();
  vertex(64,133);
  vertex(62,138);
  vertex(56,135);
  vertex(60,132);
  endShape(CLOSE);
  
  //medio circulo al lado de triangulo blanco abajo
  stroke(217,68,35);
  fill(255);
  beginShape();
  vertex(80,133);
  vertex(75,145);
  vertex(78,146);
  vertex(83,147);
  vertex(87,142);
  vertex(85,137);
  vertex(83,133);
  endShape(CLOSE);
  
  //linea recta
  stroke(0);
  line(98,15,66,55);
  
  //forma morada
  fill(133,99,166);
  noStroke(0);
  beginShape();
  vertex(173,27);
  vertex(175,53);
  vertex(215,75);
  vertex(215,10);
  endShape(CLOSE);
  
  //cuadrado negro esquina  superior izquierda
  fill(0);
  beginShape();
  vertex(24,15);
  vertex(22,27);
  vertex(10,22);
  vertex(16,10);
  endShape(CLOSE);
  
  //trinagulo blanco esquina  superior izquierda
  fill(255);
  beginShape();
  vertex(30,47);
  vertex(18,35);
  vertex(69,4);
  vertex(72,8);
  endShape(CLOSE);
  
  //trinagulo blanco esquina  superior derecha
  fill(255);
  beginShape();
  vertex(172,50);
  vertex(160,60);
  vertex(135,20);
  vertex(140,15);
  endShape(CLOSE);
  
  beginShape(0);
  fill(30,39,89);
  vertex(135,20);
  vertex(140,15);
  vertex(136,10);
  vertex(128,14);
  endShape(CLOSE);
  
  //linea MORADA 
  stroke(148, 131, 175);
  line(29,26,39,39);
  line(29,26,38,38);
  line(30,27,39,39);
  
  //linea roa
  stroke(217, 68, 35);
  line(42,35,33,24);
  
  //cuadro naranja
  beginShape(0);
  vertex(60,16);
  vertex(55,23);
  endShape(CLOSE);
  
}

