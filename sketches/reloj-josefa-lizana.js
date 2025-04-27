const relojJosefa = (sketch) => {
  let r = 200;
  let h_n = 12;
  let m_n = 60;
  let s_n = 60;
  let color1, color2;

  let reloj;

  sketch.setup = () => {
    sketch.createCanvas(500, 500);
    sketch.angleMode(sketch.DEGREES);
    color1 = sketch.color("#eb3480");
    color2 = sketch.color("#76e4f5");

    reloj = new Reloj(sketch.width / 2, sketch.height / 2, r);
  }

  sketch.draw = () => {
    sketch.background("#29024f");
    reloj.principalReloj();
  }

  class Reloj {
    constructor(x, y, r) {
      this.x = x;
      this.y = y;
      this.r = r;
    }

    principalAnillo(numero, tiempo, r, segundos) {
      for (let i = 0; i < numero; i++) {
        let cantidad = (1 / numero) * i;
        let color3 = sketch.lerpColor(color1, color2, cantidad);
        sketch.fill(color3);
        sketch.stroke(color3);
        let angulo = (360 / numero) * i;
        let tiempo_angulo = (360 / numero) * tiempo;

        let x = r * sketch.cos(angulo + tiempo_angulo);
        let y = r * sketch.sin(angulo + tiempo_angulo);
        let x2 = (this.r / 15) * sketch.cos(tiempo_angulo);
        let y2 = (this.r / 15) * sketch.sin(tiempo_angulo);

        if (segundos == true) {
            sketch.line(x2, y2, x, y);
        } else {
            sketch.ellipse(x, y, 10, 10);
        }
      }
    }

    principalReloj() {
        sketch.translate(this.x, this.y);
        sketch.rotate(-90);
        let h = sketch.hour();
        let m = sketch.minute();
        let s = sketch.second();

        this.principalAnillo(h_n, h, this.r - this.r / 2, false);
        this.principalAnillo(m_n, m, this.r - this.r / 4, false);
        this.principalAnillo(s_n, s, this.r, true);
    }
  }
};
