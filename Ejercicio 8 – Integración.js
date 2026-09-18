class Atencion {

    constructor(fecha, motivo, diagnostico) {
        this.fecha = fecha;
        this.motivo = motivo;
        this.diagnostico = diagnostico;
    }

    mostrarInformacion() {
        console.log("Fecha: " + this.fecha);
        console.log("Motivo: " + this.motivo);
        console.log("Diagnóstico: " + this.diagnostico);
    }
}


class Mascota {

    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
        this.atenciones = [];
    }

    agregarAtencion(atencion) {
        this.atenciones.push(atencion);
    }

    mostrarAtenciones() {
        this.atenciones.forEach(atencion => {
            atencion.mostrarInformacion();
        });
    }
}


let mascota1 = new Mascota("Max", "Labrador", 3);

let atencion1 = new Atencion(
    "18/09/2026",
    "Vacunación",
    "Estado saludable"
);

mascota1.agregarAtencion(atencion1);

mascota1.mostrarAtenciones();