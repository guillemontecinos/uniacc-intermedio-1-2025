const relojFrancisca = (sketch) => {
  let color1, color2, color3, color4, color5, color6, color7, color8, color9;
  let posX, posY; // Posición del círculo azul
  let rectX, rectY; // Posición del rectángulo coral
  let posHX, posHY; // Posición del círculo beige rosado
  let segundos, minutos, horas;

  sketch.setup = () => {
    sketch.createCanvas(420, 475);

    // Definir paleta de colores
    color1 = sketch.color(244, 225, 193); // Beige claro
    color2 = sketch.color(244, 161, 161); // Rosa pálido
    color3 = sketch.color(255, 111, 97); // Coral suave
    color4 = sketch.color(255, 244, 230); // Blanco hueso suave
    color5 = sketch.color(167, 216, 255); // Azul pastel
    color6 = sketch.color(42, 42, 42); // Negro profundo
    color7 = sketch.color(214, 177, 124); // Marrón claro
    color8 = sketch.color(255, 222, 208); // Beige rosado suave
    color9 = sketch.color(216, 168, 227); // Lavanda suave
  }

  sketch.draw = () => {
    sketch.background(color1); // Reestablecer fondo para animación fluida
    sketch.dibujarRectangulosCr(); // dibujar rect con relleno
    sketch.dibujarLineas();
    sketch.dibujarFigurasM(); // Figuras de movimiento marca los mn, sg, hr

    // Obtener los segundos y minutos actuales
    segundos = sketch.second() % 60; // representa mercurio
    minutos = sketch.minute() % 60; // representa venus
    horas = sketch.hour() % 12; // representa marte

    // Actualizar posiciones
    sketch.actualizarPosicion(); // Para el círculo celeste
    sketch.actualizarRectangulo(); // Para el rectángulo coral suave
    sketch.actualizarPosicionHora(); // Para el círculo beige rosado
  }

  sketch.dibujarFigurasM = () => {
    // Dibujar el círculo celeste marca los seg. "mercurio"
    sketch.fill(color5); // Azul pastel
    sketch.ellipse(posX, posY, 45, 40);
    sketch.fill(color4); // Blanco hueso suave
    sketch.ellipse(posX - 2, posY - 3, 28, 28);

    // Dibujar el rectángulo coral suave marca los min."venus"
    sketch.fill(color3); // Coral suave
    sketch.rect(rectX, rectY, 75, 40, 15);
    sketch.fill(color9); // Lavanda suave
    sketch.rect(rectX + 4, rectY + 3, 50, 20, 20);

    // Dibujar el círculo beige rosado que marca la hora "marte" moviéndose en el rectángulo superior
    sketch.fill(color2); // Beige rosado suave
    sketch.ellipse(posHX, posHY - 3, 50, 45);
    sketch.fill(color8); // Rosa pálido
    sketch.ellipse(posHX - 2, posHY - 7, 35, 30);
  }

  sketch.dibujarRectangulosCr = () => {
    // Rectángulo negro vertical
    sketch.fill(color6); // Negro profundo
    sketch.rect(125, 40, 60, 290, 20); //rect 1 detras

    // Rectángulo marrón claro convestices redondeados como el sol
    sketch.fill(color7); // Marrón claro
    sketch.rect(140, 60, 100, 400, 20); //rect 2 adelante
  }

  sketch.dibujarLineas = () => {
    // Líneas negras dentro del rectángulo marrón claro
    sketch.stroke(color6); // Negro profundo
    sketch.strokeWeight(6);
    sketch.line(220, 110, 220, 440); // linea 1 borde derecho
    sketch.line(205, 80, 205, 425); // liena 2 al lado izquiedo
    sketch.noStroke();

    // Líneas blancas geométricas que representan orbitas
    sketch.push();
    sketch.stroke(color4); // Blanco hueso suave
    sketch.strokeWeight(3);
    sketch.noFill();
   sketch.rect(50, 185, 285, 190, 50); // rect sin relleno por fuera G
    sketch.rect(112, 215, 190, 135, 30); // rect sin relleno por dentro P
    sketch.rect(185, 45, 200, 90, 20); // rect sin relleno por dentro P2
    sketch.pop();

    //Imprimir en la consola la hora, minutos y segundos
    // console.log(
    //   "Hora: " + nf(hour(), 2) + ":" + nf(minutos, 2) + ":" + nf(segundos, 2)
    // );
  }

  sketch.actualizarPosicion = () => {
    let margen = 10;

    // Esquinas del círculo interno
    let x1 = 95 + margen,
      y1 = 214 + margen; // Esquina superior izquierda
    let x2 = x1 + 205 - margen * 2,
      y2 = y1; // Esquina superior derecha
    let x3 = x2,
      y3 = y1 + 140 - margen - 15; // Esquina inferior derecha
    let x4 = x1 + 10,
      y4 = y3; // Esquina inferior izquierda

    let t = segundos % 60;

    if (t < 15) {
      posX = sketch.map(t, 0, 15, x1, x2);
      posY = y1;
    } else if (t < 30) {
      posX = x2;
      posY = sketch.map(t, 15, 30, y1, y3);
    } else if (t < 45) {
      posX = sketch.map(t, 30, 45, x2, x4);
      posY = y3;
    } else {
      posX = x4;
      posY = sketch.map(t, 45, 60, y3, y1);
    }
  }

  sketch.actualizarRectangulo = () => {
    let margen = 5;
    // Esquinas del rectángulo grande blanco donde se mueve el rectángulo coral
    let x1 = 5 + margen,
      y1 = 155 + margen; // Esquina superior izquierda
    let x2 = x1 + 315 - margen * 2,
      y2 = y1; // Esquina superior derecha
    let x3 = x2,
      y3 = y1 + 210 - margen * 2; // Esquina inferior derecha
    let x4 = x1,
      y4 = y3; // Esquina inferior izquierda

    let t = minutos % 60; // Utilizamos los minutos para el movimiento

    // Movimiento en sentido horario
    if (t < 15) {
      rectX = sketch.map(t, 0, 15, x1, x2);
      rectY = y1;
    } else if (t < 30) {
      rectX = x2;
      rectY = sketch.map(t, 15, 30, y1, y3);
    } else if (t < 45) {
      rectX = sketch.map(t, 30, 45, x2, x4);
      rectY = y3;
    } else {
      rectX = x4;
      rectY = sketch.map(t, 45, 60, y3, y1);
    }
  }

  sketch.actualizarPosicionHora = () => {
    let margen = 10;

    // Esquinas del rectángulo superior donde se mueve el círculo beige rosado
    let x1 = 185 + margen,
      y1 = 55 + margen;
    let x2 = x1 + 200 - margen * 2,
      y2 = y1;
    let x3 = x2,
      y3 = y1 + 90 - margen * 2;
    let x4 = x1,
      y4 = y3;

    let t = horas % 12;

    if (t < 3) {
      posHX = sketch.map(t, 0, 3, x1, x2);
      posHY = y1;
    } else if (t < 6) {
      posHX = x2;
      posHY = sketch.map(t, 3, 6, y1, y3);
    } else if (t < 9) {
      posHX = sketch.map(t, 6, 9, x2, x4);
      posHY = y3;
    } else {
      posHX = x4;
      posHY = sketch.map(t, 9, 12, y3, y1);
    }
  }
};
