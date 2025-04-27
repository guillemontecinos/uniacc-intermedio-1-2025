const replicaAlinette = (sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(400, 600);
        sketch.background (240)
        sketch.noFill()
        sketch.noStroke()
        
        
        
        //rectangulo naranja
        sketch.fill(240, 80, 50)
        sketch.rect(100, 100, 150, 150)
        
        //rectangulo azul
        sketch.fill(50, 100, 200)
        sketch.rect(200, 200, 150, 150)
        
        // Triángulo negro (esquina inferior izquierda)
        sketch.fill(30)
        sketch.triangle(50, 350, 150, 350, 150, 450)
      
        // Triángulo azul (pegado al negro, formando un cuadrado)
        sketch.fill(50, 100, 200)
        sketch.triangle(50, 350, 50, 450, 150, 450)
        
        //medios circulos y circulo amarillo
        sketch.fill(250, 200, 0)
        sketch.arc(157, 70,150, 150, 0,  PI )
        sketch.arc(350, 149.6, 100, 100, -29.85, PI)
        sketch.ellipse(300, 350, 100, 100)
        
        //circulo negro
        sketch.fill(30)
        sketch.ellipse (318, 100, 65.8, 65.8)
        
        //medio circulo naranja
        sketch.fill(240, 80, 50)
        sketch.arc(250, 450, 100, 100, PI, 29.85)
        
        //rectangulos de fondo
        sketch.noFill()
        sketch.stroke(0)
        sketch.strokeWeight(1)
        sketch.rect(81, 70, 150 ,150)
        sketch.rect(170, 170, 180 ,180)
        
        //semi circulos y circulos de fondo
        sketch.ellipse(90, 350, 80, 80)
        sketch.arc(275, 450, 150, 150, PI, 0, CHORD)
        sketch.arc(350, 126, 150, 150, HALF_PI, -HALF_PI, CHORD)
       
    }  
}