class Estudiante {

    constructor(nombre) {
        this.nombre = nombre;
        this.notas = [];
    }

    agregarNota(nota) {
        this.notas.unshift(nota);
    }
}

let estudiante1 = new Estudiante("Manuel");

estudiante1.agregarNota(4.0);
estudiante1.agregarNota(3.5);
estudiante1.agregarNota(4.8);

console.log(estudiante1.notas);