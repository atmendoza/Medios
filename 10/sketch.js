var datos;
var cuantos;
var artist;
var donde;


function preload(){

    datos = loadJSON("artistas.json");
  img = loadImage("atronauta2.png");
  fnd = loadImage("fondo.jpg");
}

function setup() {
  background(220);
  createCanvas(400, 400);
  
  
  textSize(20);
  fill(255,33,97);
  text(datos.number, 20, 30);
  cuantos = datos.number;
 
  
  
  
 for(var i = 0; i < cuantos; i = i + 1){
   
   
   var posX = random(width - (512 / 6));
   var posY = random(height - (512 / 6));
   fill(0);
  //ellipse(posX, posY, 20, 20);
   //image(img, posX, posY, 512 / 6, 512/6);
   textSize(30);
    text("👩🏽‍🎨", posX, posY);
   var nombre = datos.people[i].name;
   fill(0);
   textSize(12);
   textAlign(CENTER);
    text(nombre, posX, posY + 20);
   var donde = datos.people[i].craft;
   fill(0);
   textSize(10);
   textAlign(CENTER);
    text(donde, posX, posY + 40);
  }
}

function draw() {
  
  
}