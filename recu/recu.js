//Tenutto Lucila
//Gonzalez Victoria 86848/2

let pantalla = 0;
let imagenes = [];
let tiempoCambio = 50000;
let tiempoUltimoCambio;
let fuente1;
let colorX;
let colorY;
let botones = [];
let estadoActual = 0;
let song;
let textos = [];
let colores = []; // Arreglo para los colores de cada pantalla
let tamaños = [];

function setup() {
  createCanvas(640, 480);
  tiempoUltimoCambio = millis();
  song.setVolume(0.5);
  dibujarBotones(estadoActual);
  tam ();

  botones[0] = [[160, 350, 130, 60], [350, 350, 130, 60]];
  textos[0] = ["Comenzar", "Creditos"];

  botones[1] = [[250, 400, 130, 60]];
  textos[1] = ["Volver"];

  botones[2] = [[250, 400, 130, 60]];
  textos[2] = ["Avanzar"];

  botones[3] = [[250, 400, 130, 60]];
  textos[3] = ["Avanzar"];

  botones[4] = [[150, 350, 130, 60], [350, 350, 130, 60]];
  textos[4] = ["Solos", "Pedir ayuda"];

  botones[5] = [[250, 400, 130, 60]];
  textos[5] = ["Avanzar"];

  botones[6] = [[250, 400, 130, 60]];
  textos[6] = ["Avanzar"];

  botones[7] = [[250, 400, 130, 60]];
  textos[7] = ["Reiniciar"];

  botones[8] = [[250, 400, 130, 60]];
  textos[8] = ["Avanzar"];

  botones[9] = [[250, 400, 130, 60]];
  textos[9] = ["Avanzar"];

  botones[10] = [[250, 400, 130, 60]];
  textos[10] = ["Avanzar"];

  botones[11] = [[150, 350, 130, 60], [350, 350, 130, 60]];
  textos[11] = ["Destruirla", "Usarla"];

  botones[12] = [[250, 400, 130, 60]];
  textos[12] = ["Avanzar"];

  botones[13] = [[250, 400, 130, 60]];
  textos[13] = ["Reiniciar"];

  botones[14] = [[250, 400, 130, 60]];
  textos[14] = ["Avanzar"];

  botones[15] = [[250, 400, 130, 60]];
  textos[15] = ["Reiniciar"];
}

function draw() {
  background(50);
  colorX = map (mouseX, 0, width, 0, 255);
  colorY = map (mouseY, 0, height, 0, 255);

  imgs ();
  txt ();
  dibujarBotones(estadoActual);
  tiempo ();
}

function keyPressed () {
  musiquita ();
}
