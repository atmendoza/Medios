var tablaNacidos;
var numFilas;
var numColumnas;

function preload(){
    tablaNacidos = loadTable('assets/nacidos.csv', 'csv', 'header');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
  
  fill(0);
  textAlign(CENTER);
  text('Total fertility rate (live births per woman)', windowWidth/2, 80);

  numFilas = tablaNacidos.getRowCount();
  numColumnas = tablaNacidos.getColumnCount();

 for (var i = 0; i < numFilas; i = i + 1) {
    var nacprom = tablaNacidos.getNum(i, 3);
    var ano = tablaNacidos.getString(i, 1);

    var alto = map(nacprom, 1, 7, 0, height);
    var ancho = width / numFilas;
    var posX = (numFilas - 1 - i) * (ancho);
    var posY = height - alto;

    rect(posX, posY, ancho - 1, alto - 1);
    
    push();
    translate(posX+(ancho-3), height-2);
    rotate(-HALF_PI);
    text(ano, 0, 0);
    pop();
  }


}

function draw() {
  background(220);
}