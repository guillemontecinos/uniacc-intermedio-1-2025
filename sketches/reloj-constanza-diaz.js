const relojConstanza = (sketch) => {
  sketch.setup = () => {
    sketch.createCanvas(960, 720); // Tamaño del canvasketch.
  }

  sketch.draw = () => {
    if (sketch.frameCount % 60 === 0) {
      // Se actualiza cada 60 cuadros (corresponde a 1 segundo).

      sketch.background(1); // Fondo negro para el canvasketch.

      const h = sketch.hour(); // Hora actual (de 0 a 23).
      const m = sketch.minute(); // Minutos actuales (de 0 a 59).
      const s = sketch.second(); // Segundos actuales (de 0 a 59).

      // Crear CONSANTES para los colores de las horas
      const colors = [
        // Crea un array, se utiliza para hacer listas []

        sketch.color(255, 255, 0), // Amarillo (24:00)
        sketch.color(255, 204, 0), // Amarillo cálido (01:00)
        sketch.color(255, 170, 0), // Naranja (02:00)
        sketch.color(255, 85, 0), // Naranja claro (03:00)
        sketch.color(255, 0, 0), // Rojo (04:00)
        sketch.color(204, 0, 0), // Rojo oscuro (05:00)
        sketch.color(170, 0, 0), // Rojo intenso (06:00)
        sketch.color(85, 255, 0), // Verde pasto (07:00)
        sketch.color(0, 255, 0), // Verde (08:00)
        sketch.color(0, 179, 0), // Verde suave (9:00)
        sketch.color(0, 255, 85), // Verde menta (10:00)
        sketch.color(0, 255, 170), // Verde aqua (11:00)
        sketch.color(0, 255, 255), // Cian (12:00)
        sketch.color(0, 170, 255), // Azul cielo claro (13:00)
        sketch.color(0, 85, 255), // Azul celeste (14:00)
        sketch.color(0, 0, 255), // Azul (15:00)
        sketch.color(85, 0, 255), // Púrpura claro (16:00)
        sketch.color(170, 0, 255), // Violeta (17:00)
        sketch.color(255, 0, 255), // Magenta (18:00)
        sketch.color(255, 85, 255), // Rosa brillante (19:00)
        sketch.color(204, 102, 255), // Lavanda (20:00)
        sketch.color(128, 0, 128), // Púrpura (21:00)
        sketch.color(102, 0, 102), // Púrpura oscuro (22:00)
        sketch.color(64, 0, 64), // Vino oscuro (23:00)
      ]; // Crea un array, se utiliza para hacer listas []

      // Dibujar los cuadrados de las horas del día
      sketch.strokeWeight(1.5); // Añadir linea negra para dividir los minutos
      //Arriba
      sketch.fill(colors[0]); // Amarillo 01:00
      sketch.rect(0, 0, 120, 120); // Primer cuadrado

      sketch.fill(colors[1]); // Amarillo cálido 02:00
      sketch.rect(120, 0, 120, 120); // Segundo cuadrado

      sketch.fill(colors[2]); // Naranja 03:00
      sketch.rect(240, 0, 120, 120); // Tercer cuadrado

      sketch.fill(colors[3]); // Naranja claro 04:00
      sketch.rect(360, 0, 120, 120); // Cuarto recuadro

      sketch.fill(colors[4]); // Rojo 05:00
      sketch.rect(480, 0, 120, 120); // Primer cuadrado

      sketch.fill(colors[5]); // Rojo oscuro 06:00
      sketch.rect(600, 0, 120, 120); // Segundo cuadrado

      sketch.fill(colors[6]); // Rojo intenso 07:00
      sketch.rect(720, 0, 120, 120); // Tercer cuadrado

      sketch.fill(colors[7]); // Verde pasto 08:00
      sketch.rect(840, 0, 120, 120); // Cuarto cuadrado

      //Derecha
      sketch.fill(colors[8]); // Verde 09:00
      sketch.rect(840, 120, 120, 120); // Primer cuadrado

      sketch.fill(colors[9]); // Verde intenso 10:00
      sketch.rect(840, 240, 120, 120); // Segundo cuadrado

      sketch.fill(colors[10]); // Verde menta 11:00
      sketch.rect(840, 360, 120, 120); // Tercer cuadrado

      sketch.fill(colors[11]); // Verde aqua 12:00
      sketch.rect(840, 480, 120, 120); // Cuarto cuadrado

      sketch.fill(colors[12]); // Cian 13:00
      sketch.rect(840, 600, 120, 120); // Primer cuadrado

      //Abajo
      sketch.fill(colors[13]); // Azul cielo claro 14:00
      sketch.rect(720, 600, 120, 120); // Segundo cuadrado

      sketch.fill(colors[14]); // Azul celeste 15:00
      sketch.rect(600, 600, 120, 120); // Tercer cuadrado

      sketch.fill(colors[15]); // Azul 16:00
      sketch.rect(480, 600, 120, 120); // Cuarto cuadrado

      sketch.fill(colors[16]); // Púrpura claro 17:00
      sketch.rect(360, 600, 120, 120); // Primer cuadrado

      sketch.fill(colors[17]); // Violeta 18:00
      sketch.rect(240, 600, 120, 120); // Segundo cuadrado

      sketch.fill(colors[18]); // Magenta 19:00
      sketch.rect(120, 600, 120, 120); // Tercer cuadrado

      sketch.fill(colors[19]); // Rosa fuerte 20:00
      sketch.rect(0, 600, 120, 120); // Cuarto cuadrado

      //Izquierda
      sketch.fill(colors[20]); // Rosa suave 21:00
      sketch.rect(0, 480, 120, 120); // Primer cuadrado

      sketch.fill(colors[21]); // Púrpura 22:00
      sketch.rect(0, 360, 120, 120); // Segundo cuadrado

      sketch.fill(colors[22]); // Teal 23:00
      sketch.rect(0, 240, 120, 120); // Tercer cuadrado

      sketch.fill(colors[23]); // Azul oscuro 24:00
      sketch.rect(0, 120, 120, 120); // Cuarto cuadrado

      // Generar CONSTANTE para utilizar los colores respecto a la hora
      const baseColor = colors[h];

      // Dibujo de la cuadrícula de minutos (6 filas - 10 columnas)
      const horizontalX = (sketch.width - 10 * 50) / 2; //  Centrar la cuadrícula en el eje X
      const verticalY = (sketch.height - 6 * 50) / 2; //  Centrar la cuadrícula en el eje Y
      const tamañoC = 50; // Tamaño del cuadrado.

      // Cuadrados utilizando LET, me permite que la variable sea reasignada en cada iteración
      for (let fila = 0; fila < 6; fila++) {
        // Se ejecuta 6 veces, una vez por cada fila de la cuadrícula, comienza desde el 0.
        for (let COLUMNS = 0; COLUMNS < 10; COLUMNS++) {
          // Se ejecuta 10 veces, una vez por cada columna en cada fila, comienza desde el 0.

          const x = horizontalX + COLUMNS * tamañoC; // Posición horizontal de cada cuadro.
          const y = verticalY + fila * tamañoC; // Posición vertical de cada cuadro.

          const actual = fila * 10 + COLUMNS; // Índice único para cada cuadro.

          // Crear un degradado del color de la hora y que se refleje según el minuto.
          const mapaColor = sketch.lerpColor(
            sketch.color(255),
            baseColor, // Base blanca con la cual se comienza.
            sketch.map(actual, 0, 59, 0, 1)
          ); // variable reescala un valor de un rango original a un nuevo rango.

          //Crear rectanculo base
          sketch.fill(actual < m ? mapaColor : 220); // Minutos pasados y los futuros, base el color grisketch.
          sketch.rect(x, y, tamañoC, tamañoC); // Dibujar el rectángulo base.

          // Parpadeo del cuadro del minuto actual.
          if (actual == m) {
            //Operador de comparación  Me permite el parpadeo del segundo por cada recuadro por minuto.

            let parpadeo = sketch.lerpColor(
              sketch.color(1),
              baseColor, // Color base del parpadeo.
              sketch.map(s % 2, 0, 1, 0.5, 1)
            ); // Frecuencia con la que parpadea (segundos).

            sketch.fill(parpadeo); // Establece el color del cuadro al momento de parpadear.
            sketch.rect(x, y, tamañoC, tamañoC); // Permanecer el cuadrado en el minuto correspondiente.
          }
        }
      }
    }
  }
};