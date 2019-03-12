var miHora;
var miMinuto;
var miSegundo;
var a = 100;


function setup() {
  createCanvas(1200, 490);
  angleMode(DEGREES);
    background(230);
  
}

function draw() {


  
  miHora = hour();
  miHoraGra = map(miHora, 0, 12, 0, 360);
  miMinuto = minute();
  miMinutoGra = map(miMinuto, 0, 60, 0, 360);
  miSegundo = second();
  miSegundoGra = map(miSegundo, 0, 60, 0, 360);
  
  

    function mousePressed (){
  a = a + 5;
}
  
  
  
  //linea 1
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 20, 20, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 260, 20, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 500, 20, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 740, 20, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 980, 20, miSegundo, miSegundo);
  
  }
  //linea 1
  //linea 2
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 20, 60, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 260, 60, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 500, 60, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 740, 60, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 980, 60, miSegundo, miSegundo);
  
  }
  //linea 2
  //linea 3
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 20, 100, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 260, 100, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 500, 100, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
	fill(i + 10, i + 100, i + 100);
    ellipse (i + 740, 100, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 980, 100, miSegundo, miSegundo);
  
  }
  //linea 3
    //linea 4
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 20, 140, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 260, 140, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 500, 140, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
	fill(i + 80, i + 100, i + 100);
    ellipse (i + 740, 140, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 980, 140, miSegundo, miSegundo);
  
  }
  //linea 4
  //linea 5
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 20, 180, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 260, 180, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 500, 180, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 740, 180, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 980, 180, miSegundo, miSegundo);
  
  }
  //linea 5
  //linea 6
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 20, 220, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 260, 220, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 500, 220, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 740, 220, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 980, 220, miSegundo, miSegundo);
  
  }
  //linea 6
  //linea 7
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 20, 260, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 260, 260, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 500, 260, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
	fill(i + 10, i + 100, i + 100);
    ellipse (i + 740, 260, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 980, 260, miSegundo, miSegundo);
  
  }
  //linea 7
    //linea 8
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 20, 300, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 260, 300, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 500, 300, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
	fill(i + 80, i + 100, i + 100);
    ellipse (i + 740, 300, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 980, 300, miSegundo, miSegundo);
  
  }
  //linea 8
  //linea 9
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 20, 340, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 260, 340, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 500, 340, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 740, 340, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 100, i + 20, i + 50);
    ellipse (i + 980, 340, miSegundo, miSegundo);
  
  }
  //linea 9
  //linea 10
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 20, 380, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 260, 380, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 500, 380, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 740, 380, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 200, i + 40, i + 70);
    ellipse (i + 980, 380, miSegundo, miSegundo);
  
  }
  //linea 10
  //linea 11
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 20, 420, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 260, 420, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 500, 420, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
	fill(i + 10, i + 100, i + 100);
    ellipse (i + 740, 420, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 10, i + 100, i + 100);
    ellipse (i + 980, 420, miSegundo, miSegundo);
  
  }
  //linea 11
    //linea 12
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 20, 460, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 260, 460, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 500, 460, miSegundo, miSegundo);
  
  }
  for(var i = 0; i < 240; i = i + 40){
	fill(i + 80, i + 100, i + 100);
    ellipse (i + 740, 460, miSegundo, miSegundo);
  
  }
   for(var i = 0; i < 240; i = i + 40){
    fill(i + 80, i + 100, i + 100);
    ellipse (i + 980, 460, miSegundo, miSegundo);
  
  }
  //linea 12
  
  ellipse(width/2, height/2, a, a);
    //segundero
  push();
  fill(0);
  stroke(0);
  translate(width/2, height/2);
  rotate(miSegundoGra);
  strokeWeight(1);
  line(0, 0, 0, -100);
  pop();
  

  

}