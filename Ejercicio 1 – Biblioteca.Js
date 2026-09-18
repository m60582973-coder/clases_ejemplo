class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }

    mostrarInformacion() {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Año: " + this.anio);
    }
}

let libro1 = new Libro("Cien años de soledad", "Gabriel García Márquez", 1967);

libro1.mostrarInformacion();