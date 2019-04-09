var datos;
var cuantos;
var img;

function preload(){

    datos = loadJSON("artistas.json");

}

function setup() {
  background(220);
  createCanvas(400, 400);
  text(datos.number, 50, 50);
  cuantos = datos.number;
  
 for(var i = 0; i < cuantos; i = i + 1){
   
   
   var posX = random(width - (512 / 6));
   var posY = random(height - (512 / 6));
   fill(0);
  //ellipse(posX, posY, 20, 20);
   image(img, posX, posY, 512 / 6, 512/6);
   var nombre = datos.people[i].name;
   fill(0);
   textSize(9);
   text(nombre, posX, posY);
  }
}

function draw() {
  
  
}
