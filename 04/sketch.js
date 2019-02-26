var posxrect1 = 20;
var posyrect1 = 20;
var tamRect1 = 40;

var posxrect2 = 20;
var posyrect2 = 70;
var tamRect2 = 40;

var posxrect3 = 20;
var posyrect3 = 120;
var tamRect3 = 40;

var posxrect4 = 20;
var posyrect4 = 170;
var tamRect4 = 40;

var posxrect5 = 20;
var posyrect5 = 220;
var tamRect5 = 40;

var posxrect6 = 20;
var posyrect6 = 270;
var tamRect6 = 40;

var posxrect7 = 20;
var posyrect7 = 320;
var tamRect7 = 40;

var posxrect8 = 20;
var posyrect8 = 370;
var tamRect8 = 40;

var posxrect9 = 20;
var posyrect9 = 420;
var tamRect9 = 40;

var posxrect10 = 20;
var posyrect10 = 470;
var tamRect10 = 40;

//borrador
var borrx = 480;
var borry = 500;
var tamborrx = 40;
var tamborry = 20;

//guardar
var savex = 540;
var savey = 500;
var tamsavex = 40;
var tamsavey = 20;

//herramientas
var herSelect = 1;
var pinx = 50;
var piny = 40;


var colorsec = 0;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}


function draw() {

  //fondo barra de colores
  fill(190);
  noStroke();
  rect(10, 0, 60, height);

  //fondo barra de pinceles
  fill(190);
  noStroke();
  rect(width - 70, 0, 60, height);

  //borrador
  fill(120);
  stroke(0);
  rect(borrx, borry, tamborrx, tamborry);

  //guardar
  fill(120, 39);
  stroke(0);
  rect(savex, savey, tamsavex, tamsavey);

  //botones de colores
  noStroke();
  fill(250);
  rect(posxrect1, posyrect1, tamRect1, tamRect1);
  fill(0);
  rect(posxrect2, posyrect2, tamRect2, tamRect2);
  fill(194, 14, 25);
  rect(posxrect3, posyrect3, tamRect3, tamRect3);
  fill(299, 277, 34);
  rect(posxrect4, posyrect4, tamRect4, tamRect4);
  fill(40, 149, 72);
  rect(posxrect5, posyrect5, tamRect5, tamRect5);
  fill(1, 157, 124);
  rect(posxrect6, posyrect6, tamRect6, tamRect6);
  fill(49, 43, 128);
  rect(posxrect7, posyrect7, tamRect7, tamRect7);
  fill(196, 1, 122);
  rect(posxrect8, posyrect8, tamRect8, tamRect8);
  fill(203, 79, 36);
  rect(posxrect9, posyrect9, tamRect9, tamRect9);
  fill(163, 126, 78);
  rect(posxrect10, posyrect10, tamRect10, tamRect10);


  //pinceles
  beginShape(0);
  fill(0);
  rect(width - pinx, piny, 20, 20);
  endShape();
  
if (herSelect == 1) {
    //blanco
    herSelect = 1;
  }
  
  if (mouseIsPressed == true) {
    if (mouseX > savex && mouseX < savex + tamsavex && mouseY > savey && mouseY <savey + tamsavey) {

      if (frameCount%10==0) {
        saveCanvas("mySketch", 'jpg');
      }
    }
  }
/////////////////////////////////////////////
  if (colorsec == 1) {
    //blanco
    stroke(0);
    fill(250);
  } else if (colorsec == 2) {
    //negro
    fill(0);
  } else if (colorsec == 3) {
    //rojo
    noStroke(0);
    fill(194, 13, 25);
  } else if (colorsec == 4) {
    //amarillo
    fill(299, 277, 34);
  } else if (colorsec == 5) {
    //verde
    fill(40, 149, 72);
  } else if (colorsec == 6) {
    //cian
    fill(1, 157, 124);
  } else if (colorsec == 7) {
    //azul
    fill(49, 43, 128);
  } else if (colorsec == 8) {
    //magenta
    fill(196, 1, 122);
  } else if (colorsec == 9) {
    //naranja
    fill(203, 79, 36);
  } else if (colorsec == 9) {
    //cafe
    fill(163, 126, 78);
  } 

  if (mouseIsPressed == true) {
    if (mouseX > borrx && mouseX < borrx + tamborrx && mouseY > borry && mouseY <borry + tamborry) {

      background(255);
    }
  }

  if (mouseIsPressed == true) {
    if (mouseX > savex && mouseX < savex + tamsavex && mouseY > savey && mouseY <savey + tamsavey) {

      if (frameCount%10==0) {
        saveCanvas("mySketch", 'jpg');
      }
    }
  }

  if (mouseIsPressed == true) {

    ellipse(mouseX, mouseY, 20, 20);
    if (mouseX > posxrect1 && mouseX < posxrect1 + tamRect1 && mouseY > posyrect1 && mouseY <posyrect1 + tamRect1) {

      colorsec = 1;
    }
    if (mouseX > posxrect2 && mouseX < posxrect2 + tamRect2 && mouseY > posyrect2 && mouseY <posyrect2 + tamRect2) {

      colorsec = 2;
    }
    if (mouseX > posxrect3 && mouseX < posxrect3 + tamRect3 && mouseY > posyrect3 && mouseY <posyrect3 + tamRect3) {

      colorsec = 3;
    }
    if (mouseX > posxrect4 && mouseX < posxrect4 + tamRect4 && mouseY > posyrect4 && mouseY <posyrect4 + tamRect4) {

      colorsec = 4;
    }
    if (mouseX > posxrect5 && mouseX < posxrect5 + tamRect5 && mouseY > posyrect5 && mouseY <posyrect5 + tamRect5) {

      colorsec = 5;
    }
    if (mouseX > posxrect6 && mouseX < posxrect6 + tamRect6 && mouseY > posyrect6 && mouseY <posyrect6 + tamRect6) {

      colorsec = 6;
    }
    if (mouseX > posxrect7 && mouseX < posxrect7 + tamRect7 && mouseY > posyrect7 && mouseY <posyrect7 + tamRect7) {

      colorsec = 7;
    }
    if (mouseX > posxrect8 && mouseX < posxrect8 + tamRect8 && mouseY > posyrect8 && mouseY <posyrect8 + tamRect8) {

      colorsec = 8;
    }
    if (mouseX > posxrect9 && mouseX < posxrect9 + tamRect9 && mouseY > posyrect9 && mouseY <posyrect9 + tamRect9) {

      colorsec = 9;
    }
    if (mouseX > posxrect10 && mouseX < posxrect10 + tamRect10 && mouseY > posyrect10 && mouseY <posyrect10 + tamRect10) {

      colorsec = 10;
    }
    
    
  }
}
