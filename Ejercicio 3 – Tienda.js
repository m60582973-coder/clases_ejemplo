class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
mostrarProducto() {
        console.log("Producto: " + this.nombre);
        console.log("Precio: $" + this.precio);
    }
cambiarPrecio(nuevoPrecio) {
        this.precio = nuevoPrecio;
    }
}
let producto1 = new Producto("Teclado", 50000);
console.log("Antes:");
producto1.mostrarProducto();
producto1.cambiarPrecio(65000);
console.log("Después:");
producto1.mostrarProducto();