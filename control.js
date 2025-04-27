let sketches = [
    {
        name: 'Alinette Galdames',
        section: 1,
        sketch: new p5(replicaAlinette, document.getElementById('alinette-container')),
        parent: document.getElementById('alinette-container'),
        project_title: 'Recreando el Pasado:',
        project_description: ' Elegir una obra de las artes visuales o el diseño y programarla utilizando las formas nativas de p5.js.'
    },
    {
        name: 'Tamara Silva',
        section: 2,
        sketch: new p5(replicaTamara, document.getElementById('tamara-container')),
        parent: document.getElementById('tamara-container'),
        project_title: 'Recreando el Pasado:',
        project_description: ' Elegir una obra de las artes visuales o el diseño y programarla utilizando las formas nativas de p5.js.'
    },
    {
        name: 'Javiera Castro',
        section: 2,
        sketch: new p5(replicaJaviera, document.getElementById('javiera-container')),
        parent: document.getElementById('javiera-container'),
        project_title: 'Recreando el Pasado:',
        project_description: ' Elegir una obra de las artes visuales o el diseño y programarla utilizando las formas nativas de p5.js.'
    },
    {
        name: 'Francisca Huenullán',
        section: 1,
        sketch: new p5(relojFrancisca, document.getElementById('francisca-container')),
        parent: document.getElementById('francisca-container'),
        project_title: 'Reloj:',
        project_description: ' Diseñar un reloj visual que despliegue el tiempo de una manera novedosa o poco convencional.'
    },
    {
        name: 'Constanza Díaz',
        section: 1,
        sketch: new p5(relojConstanza, document.getElementById('constanza-container')),
        parent: document.getElementById('constanza-container'),
        project_title: 'Reloj:',
        project_description: ' Diseñar un reloj visual que despliegue el tiempo de una manera novedosa o poco convencional.'
    },
    {
        name: 'Josefa Lizana',
        section: 2,
        sketch: new p5(relojJosefa, document.getElementById('josefa-container')),
        parent: document.getElementById('josefa-container'),
        project_title: 'Reloj:',
        project_description: ' Diseñar un reloj visual que despliegue el tiempo de una manera novedosa o poco convencional.'
    },
    {
        name: 'Valentina Medel',
        section: 2,
        sketch: new p5(relojValentina, document.getElementById('valentina-container')),
        parent: document.getElementById('valentina-container'),
        project_title: 'Reloj:',
        project_description: ' Diseñar un reloj visual que despliegue el tiempo de una manera novedosa o poco convencional.'
    },
    {
        name: 'Fernanda González',
        section: 1,
        sketch: new p5(posterFernanda, document.getElementById('fernanda-container')),
        parent: document.getElementById('fernanda-container'),
        project_title: 'Poster Interactivo:',
        project_description: ' Diseñar el concepto de un poster, establecer un set de reglas que definan animaciones e interacciones y programarlas.'
    }
]

let timer = 0, counter = 0
let exposingTime = 3 //seconds

function draw(){
    timer += deltaTime / 1000
    if(timer >= exposingTime){
        timer = 0
        counter++
        if(counter > sketches.length - 1) counter = 0

    }
    sketches.forEach((e, i) => {
        e.parent.style.setProperty('width', e.sketch.width + 'px')
        e.parent.style.setProperty('height', e.sketch.height + 'px')
        if(i != counter) e.parent.classList.add('hidden')
        else {
            e.parent.classList.remove('hidden')
            document.getElementById('student-content').innerText = 'Estudiante: ' + e.name + '\n Profesor: Guillermo Montecinos' + '\n' + 'Sección: ' + e.section
            document.getElementById('project-title').innerText = e.project_title
            document.getElementById('project-description').innerText = e.project_description
        }
    })
}