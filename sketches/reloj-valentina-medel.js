const relojValentina = (sketch) => {
    sketch.setup = () => {
        sketch.createCanvas(600, 600);
        sketch.angleMode(sketch.DEGREES); // Usamos grados en lugar de radianes
    }
      
    sketch.draw = () => {
        let sc = sketch.second();
        let mn = sketch.minute();
        let hr = sketch.hour() % 12; // Convertimos la hora a formato de 12 horas
        
        sketch.background(0);
        
        let centerX = sketch.width / 2;
        let centerY = sketch.height / 2;
        let maxRadius = 240; // Radio del círculo de los segundos
        
        
        // Dibujar el círculo de 60 pequeños círculos (segundos)
        for (let i = 0; i < 60; i++) {
            let angle = sketch.map(i, 0, 60, 0, 360) - 90;
            let x = centerX + sketch.cos(angle) * maxRadius;
            let y = centerY + sketch.sin(angle) * maxRadius;
        
            sketch.fill(i < sc ? sketch.color(255, 204, 0) : 100);
            sketch.noStroke();
            sketch.ellipse(x, y, 20, 20);
        }
        
        // Círculo de minutos que se va llenando progresivamente y se resetea
        let minuteAngle = sketch.map(mn, 0, 60, 0, 360);
        sketch.fill(255);
        sketch.noStroke();
        sketch.ellipse(centerX, centerY, maxRadius * 2);
        
        // Cuando llega a 60 minutos, el arco desaparece
        if (mn > 0) {
            sketch.fill(0);
            sketch.arc(centerX, centerY, maxRadius * 2, maxRadius * 2, -90, -90 + minuteAngle, sketch.PIE);
        }
        
        // Stroke circular para marcar la hora
        let hourAngle = sketch.map(hr, 0, 12, 0, 360);
        sketch.noFill();
        sketch.stroke(255, 0, 0);
        sketch.strokeWeight(6);
        sketch.arc(centerX, centerY, maxRadius * 2.5, maxRadius * 2.5, -90, -90 + hourAngle);
    }      
}