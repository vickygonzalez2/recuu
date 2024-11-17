function imgs () {
  if (imagenes[estadoActual]) {
    image(imagenes[estadoActual], 0, 0, width, height);
  }
}

function txt () {
  if (textosPantalla[estadoActual]) {
    text(textosPantalla[estadoActual], width / 2, height / 4);
  }
}

function tiempo () {
  if (millis() - tiempoUltimoCambio > tiempoCambio) {
    pantalla++;
    if (pantalla >= imagenes.length) {
      pantalla = 0;
    }
    tiempoUltimoCambio = millis();
  }
}

function musiquita () {
  if (key === 'm' && song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
