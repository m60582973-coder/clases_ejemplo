class Mascota {
    constructor(nombre, raza, edad) {
        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad;
    }

    mostrarInformacion() {
        console.log("Nombre: " + this.nombre);
        console.log("Raza: " + this.raza);
        console.log("Edad: " + this.edad);
    }

    cambiarEdad(nuevaEdad) {
        this.edad = nuevaEdad;
    }
}

let mascota1 = new Mascota("Max", "Labrador", 3);

mascota1.mostrarInformacion();

mascota1.cambiarEdad(4);

console.log("Después de cambiar la edad:");

mascota1.mostrarInformacion();