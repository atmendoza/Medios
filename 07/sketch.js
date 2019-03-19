var miCancion1;
var miPan;
var miFuente;
var miFoto;
var dur;
var actual;

function preload() {
  
  miFoto = loadImage('assets/imagenes/mezclador.png');
  
  //miFuente = loadFont('assets/font.otf');
  miCancion1 = loadSound('assets/canciones/alan.mp3');
  miCancion2 = loadSound('assets/canciones/a.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
    
  miFoto = loadImage('assets/imagenes/mezclador.png');
  miCancion1.play();
  //miCancion.setVolume(0.5);
  miCancion1.rate(1);
  miCancion1.pan(1);
  
  dur = miCancion1.duration();

  
}

function draw() {
  
  actual =  miCancion1.currentTime();

  background(255);
  noTint();
  image(miFoto, 0, 0, windowWidth, windowHeight);
  
  
  vol = map(mouseX, height, 0, 0.0, 1.1);
  miCancion1.setVolume(vol);
  miPan = map(mouseX, 0, width, -1.0, 1.0);
  miCancion1.pan(miPan);
  
  if (mouseIsPressed == true){
    if (miCancion1.isPlaying() == true){
    miCancion1.jump(actual + 10);
  }
  }
  
  if (keyIsPressed == true) {
    if (key == 'w') {
      miCancion1.setVolume(vol);
      vol = vol + 0.1;
    }
    if (keyIsPressed == true) {
    if (key == 's') {
      miCancion1.setVolume(vol);
      vol = vol - 0.1;
    }
      if (keyIsPressed == true) {
    if (key == 's') {
      miCancion1.setVolume(vol);
      vol = vol - 0.1;
    }
  }
  
}