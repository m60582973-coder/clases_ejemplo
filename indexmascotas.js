//una veterinaria necesita desarrol

class Animal{
    nombre
    raza 
    especie
    edad
    constructor (nombre,raza,especie,edad){
 this.nombre=nombre
  this.raza=raza
   this.especie=especie
    this.edad=edad
    }
   registrarNombre(nuevonombre){
    this.nombre=nuevonombrenombre
   }
registrarraza(nuevaraza){
    this.raza=nuevaraza
   }

   registrarespecie(nuevaespecie){
    this.especie=nuevaespecie
   }
   registrarEdad(nuevaedad){
    this.edad=nuevaedad
   }

   consultarInform(){
    console.log(this.nombre+this.raza)
   }
   
}
class propietario{
    nombrePropietaro
    direccion
    telefono
    constructor(nombre,direccion,telefono){
this.nombrePropietaro=nombre
this.direccion=direccion
this.telefono=telefono
this.mascota=[]
    }
    registarNombre(nuevonombrenombre){
        this.nombrePropietaro=nuevonombrenombre
    }
     registarNombre(nuevadireccion ){
        this.direccion=nuevadireccion
    }
     registartelefono(nuevotelefono){
        this.telefono=nuevotelefono
    }
     registarMascota(nuevamascota){
        //pop,unshift,shift,push
this.push=nuevamascota
    }
    mostrarinformacion(){
        console.log("mascota"+this.mascota+"Propiedad"+this.nombrePropietaro)
    }
}
let colmillo=new Animal("colmillo","pitbull","perro",12)
colmillo.mostrarinformacion()
let alexa=new propietario("alexa","54321","234567")
alexa.registarMascota(colmillo)
alexa.mostrarinformacion()



