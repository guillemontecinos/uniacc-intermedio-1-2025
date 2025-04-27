const posterFernanda = (sketch) => {
    let font1
    let font2
    let contenido1 = 'DONDE LAS EMOCIONES ENCUENTRAN SU SONIDO'
    let contenido2 = 'Escuchalo en Spotify'
    let npoints = 8
    let radius1 = 90       //radio estrella central
    let radius2 = 200      //radio puntas entrella central
    let desplazamiento = 10
    let noiseFactor = 0.6
    let noiseSpeed = 0.05
    let img
    let estrellasNormales = []

    // Descargar tipografías e imagen
    sketch.preload = () => {
        font1 = sketch.loadFont('./assets/fernanda-gonzalez/SpecialGothicExpandedOne-Regular.ttf')
        font2 = sketch.loadFont('./assets/fernanda-gonzalez/JaneAust.ttf')
        img = sketch.loadImage('./assets/fernanda-gonzalez/spotify_logo.png') 
    }

    sketch.setup = () => {
        sketch.createCanvas(600, 800)
        estrellasNormales = [
        {
        x: 80,                              //coordenadas
        y: 50,
        r1: 200,                            //radios
        r2: 85,
        npoints: 9,                         //cantidad de puntos de la estrella
        colorInactivo: sketch.color(255, 66, 180), //rosado
        colorActivo: sketch.color(57, 186, 250),   //celeste
        radioDeteccion: 150                 //radio desde donde detecta el mouse
        },
        {
        x: 550,                            //coordenadas
        y: 50,
        r1: 200,                           //radios
        r2: 85,
        npoints: 9,                        //cantidad de puntos de la estrella
        colorInactivo: sketch.color(255, 180, 0), //amarillo
        colorActivo: sketch.color(27, 204, 83),   //verde
        radioDeteccion: 150                //radio desde donde detecta el mouse
        },
        {
        x: 70,                              //coordenadas
        y: 760,
        r1: 200,                            //radios
        r2: 85,
        npoints: 9,                         //cantidad de puntos de la estrella
        colorInactivo: sketch.color(57, 186, 250), //celeste
        colorActivo: sketch.color(255, 180, 0),    //amarillo
        radioDeteccion: 150                 //radio desde donde detecta el mouse
        },
        {
        x: 540,                             //coordenadas
        y: 760,
        r1: 200,                           //radios
        r2: 85,
        npoints: 9,                        //cantidad de puntos de la estrella
        colorInactivo: sketch.color(247, 73, 49), //rojo
        colorActivo: sketch.color(255, 66, 180),  //rosado
        radioDeteccion: 150                //radio desde donde detecta el mouse
        }
    ]
    }

    sketch.draw = () => {
    sketch.background(245, 238, 218)
    noiseFactor = sketch.map(sketch.mouseX, 0, sketch.width, 0.01, 2)  //distorsionar vertices moviendo el mouse horizontalmente

    // Estrella con efecto en el centro
    sketch.push()
    sketch.translate(sketch.width / 2, sketch.height / 2)
    sketch.noStroke()
    sketch.fill(27, 204, 83)
    dibujarEstrellaEfecto(npoints, radius1, radius2)
    sketch.pop()

    // Estrellas normales con interacción de color
    sketch.noStroke()
    for (let estrella of estrellasNormales) {
        let distancia = dist(sketch.mouseX, sketch.mouseY, estrella.x, estrella.y)
        if (distancia < estrella.radioDeteccion) {
            sketch.fill(estrella.colorActivo)
        } else {
            sketch.fill(estrella.colorInactivo)
        }
        dibujarEstrellaNormal(estrella.x, estrella.y, estrella.r1, estrella.r2, estrella.npoints)
    }

    figurasRandom()

    // Texto
    sketch.textFont(font1);
    sketch.fill(0)
    sketch.textAlign(sketch.CENTER, sketch.CENTER)
    sketch.textSize(50)
    sketch.text(contenido1, 0, 130, 600, 500)  //texto grande
    sketch.textFont(font2)
    sketch.text(contenido2, width / 2, 520)    //texto script
    
    // Logo
    sketch.image(img, 250, 715, 120, 120)       
    }

    // Dibujar estrella centro
    function dibujarEstrellaEfecto(npoints, r1, r2) {
    let angle = sketch.TWO_PI / npoints
    let halfAngle = angle / 2.0

    sketch.beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {  //bucle que recorre un círculo dibujando la estrella
        // punto externo
        let x1 = sketch.cos(a) * r2
        let y1 = sketch.sin(a) * r2
        let dx1 = x1 + desplazamiento * sketch.noise(x1 * noiseFactor + noiseSpeed * frameCount + 1000, y1 * noiseFactor)
        let dy1 = y1 + desplazamiento * sketch.noise(x1 * noiseFactor + noiseSpeed * frameCount, y1 * noiseFactor)
        sketch.vertex(dx1, dy1)

        // punto interno
        let x2 = sketch.cos(a + halfAngle) * r1
        let y2 = sketch.sin(a + halfAngle) * r1
        let dx2 = x2 + desplazamiento * sketch.noise(x2 * noiseFactor + noiseSpeed * frameCount + 2000, y2 * noiseFactor)
        let dy2 = y2 + desplazamiento * sketch.noise(x2 * noiseFactor + noiseSpeed * frameCount + 1000, y2 * noiseFactor)
        sketch.vertex(dx2, dy2)
    }
    sketch.endShape(sketch.CLOSE)
    }

    // Dibujar estrellas de las esquinas
    function dibujarEstrellaNormal(x, y, r1, r2, npoints) {
    let angle = sketch.TWO_PI / npoints
    let halfAngle = angle / 2.0

    sketch.beginShape()
    for (let a = 0; a < TWO_PI; a += angle) {  //bucle que recorre un círculo dibujando la estrella
        let sx = x + sketch.cos(a) * r2
        let sy = y + sketch.sin(a) * r2
        sketch.vertex(sx, sy)
        sx = x + sketch.cos(a + halfAngle) * r1
        sy = y + sketch.sin(a + halfAngle) * r1
        sketch.vertex(sx, sy)
    }
    sketch.endShape(CLOSE)
    }

    // Dibujar figuras decorativas
    function figurasRandom(){
        sketch.fill(255, 180, 0)    //amarillo
    //barritas amarillas
    sketch.quad(150, 350, 160, 330, 70, 290, 60, 310)
    sketch.quad(370, 280, 450, 210, 435, 195, 355, 265)
    sketch.quad(200, 618, 230, 570, 250, 580, 220, 628)

    sketch.fill(255, 66, 180)  //rosado
    //circulos random
    sketch.circle(110, 445, 25)
    sketch.circle(260, 530, 15)
    sketch.circle(450, 355, 35)
    sketch.circle(265, 220, 20)
    sketch.circle(305, 634, 30)
    sketch.quad(420, 465, 520, 530, 532, 512, 432, 448)//barrita rosada
    
    sketch.fill(247, 73, 49)   //rojo
    //cuncunita
    sketch.circle(230, 250, 15)
    sketch.circle(220, 242, 15)
    sketch.circle(214, 230, 15)
    sketch.circle(214, 217, 15)
    sketch.circle(217, 204, 15)
    
    //barritas rojas
    sketch.quad(170, 490, 60, 530, 52, 510, 162, 470) 
    sketch.quad(315, 185, 315, 140, 295, 140, 295, 185)
    
    sketch.fill(57, 186, 250)  //celeste
    //tres ovalos
    sketch.ellipse(90, 360, 15, 20)
    sketch.ellipse(76, 360, 15, 20)
    sketch.ellipse(63, 360, 15, 20)
    
    //tres ovalos
    sketch.ellipse(350, 220, 30, 20)
    sketch.ellipse(350, 202, 30, 20)
    sketch.ellipse(350, 184, 30, 20)
    
    //flor
    sketch.ellipse(370, 540, 10, 30)
    sketch.ellipse(370, 565, 10, 30)
    sketch.ellipse(355, 553, 30, 10)
    sketch.ellipse(385, 553, 30, 10) 
    
    //flor
    sketch.ellipse(500, 320, 30, 10)
    sketch.ellipse(530, 320, 30, 10)
    sketch.ellipse(515, 305, 10, 30)
    sketch.ellipse(515, 332, 10, 30)
    }
}