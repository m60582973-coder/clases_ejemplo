class Propietario {

    constructor(nombre) {
        this.nombre = nombre;
        this.mascotas = [];
    }

    agregarMascota(mascota) {
        this.mascotas.push(mascota);
    }

    mostrarMascotas() {
        this.mascotas.forEach(mascota => {
            console.log(mascota);
        });
    }
}

// Creamos un propietario
let propietario1 = new Propietario("Manuel");

// Agregamos mascotas
propietario1.agregarMascota("Max");
propietario1.agregarMascota("Luna");
propietario1.agregarMascota("Rocky");

// Mostramos las mascotas
propietario1.mostrarMascotas();