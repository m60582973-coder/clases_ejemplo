class Atencion {

    constructor(fecha, motivo, diagnostico) {
        this.fecha = fecha;
        this.motivo = motivo;
        this.diagnostico = diagnostico;
    }

    mostrarAtencion() {
        console.log("Fecha: " + this.fecha);
        console.log("Motivo: " + this.motivo);
        console.log("Diagnóstico: " + this.diagnostico);
    }
}

// Crear un objeto
let atencion1 = new Atencion(
    "18/09/2026",
    "Dolor de estómago",
    "Gastritis"
);

// Mostrar la atención
atencion1.mostrarAtencion();