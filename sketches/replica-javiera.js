const replicaJaviera = (sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(600, 600);
        sketch.background(253, 240, 218);
        
        let startAngle = (PI / 3);
        let endAngle = (PI + (PI / 3));
        
        //colores
        //Negro 19, 20, 19
        //rojo 226, 58, 43
        //amarillo 230, 211, 134
        
        sketch.strokeWeight(30)
        
        // Línea amarilla inclinada
        sketch.strokeCap(sketch.PROJECT)
        sketch.stroke(230, 211, 134);
        sketch.line(sketch.width / 3,sketch.height / 7, sketch.width / 2, sketch.height/2.50)
        
        sketch.strokeCap(sketch.ROUND)
        sketch.stroke(19, 20, 19)
        sketch.strokeWeight(150)
        sketch.line(sketch.width/4.7, sketch.height/4.8, sketch.width/1.6, sketch.height/1.2)
        
        sketch.stroke(253, 240, 218)
        sketch.strokeCap(sketch.PROJECT)
        sketch.strokeWeight(90)
        sketch.line(sketch.width/8.8, sketch.height/4.8, sketch.width/2+4, sketch.height/1.2)
        sketch.strokeWeight(190)
        sketch.line(sketch.width/2.43, sketch.height/1.45, sketch.width/2+2, sketch.height/1.2)
        
        sketch.noStroke()  
      
        sketch.fill(226, 58, 43)
        sketch.arc(sketch.width/4.7, sketch.height/4.8, 150, 150, startAngle, endAngle, sketch.CHORD)
        
        sketch.fill(253, 240, 218)
        sketch.circle(sketch.width/4.7, sketch.height/4.8, 75)
        
        sketch.fill(19, 20, 19)
        sketch.arc(sketch.width/1.6, sketch.height/1.2, 150, 150, -PI/5.5, PI / 1.2, sketch.CHORD)
          
        // Líneas y formas centrales 
        sketch.noStroke();
        sketch.fill(226, 58, 43);
        sketch.quad(sketch.width / 2.05,sketch.height / 2.5,sketch.width / 1.4, sketch.height / 4.3,sketch.width / 1.21, sketch.height / 2.5,sketch.width / 1.69, sketch.height / 1.8);
        
        // Línea negra horizontal sobre el rectángulo rojo
        sketch.stroke(19, 20, 19);
        sketch.strokeWeight(20);
        sketch.line(sketch.width / 2.05,sketch.height / 2.5,sketch.width / 1.41,sketch.height / 4.0);
        sketch.line(sketch.width/ 1.99, sketch.height / 1.58,sketch.width / 3.23, sketch.height/1.32)
        
        // Línea amarilla horizontal sobre el rectángulo
        sketch.stroke(230, 211, 134);
        sketch.strokeWeight(25);
        sketch.line(sketch.width / 2.05,sketch.height / 2.8,sketch.width / 1.45,sketch.height / 4.5);
        sketch.line(sketch.width / 2.39,sketch.height / 1.95, sketch.width/ 2.09, sketch.height / 1.65)
        sketch.strokeWeight(20);
        sketch.line(sketch.width/ 1.92, sketch.height / 1.52,sketch.width / 3.10, sketch.height/1.27)
        
        //sketch.linea beige
        sketch.stroke(253, 240, 218)
        sketch.strokeWeight(15);
        sketch.line(sketch.width / 3.05,sketch.height / 1.85,sketch.width / 1.35,sketch.height / 3.80);
        
        //sketch.linea roja
        sketch.stroke(226, 58, 43)
        sketch.line(sketch.width / 2.43,sketch.height / 1.95,sketch.width / 1.35,sketch.height / 3.40);
      
    }
}