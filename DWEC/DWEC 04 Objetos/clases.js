"use strict"

//Clases

class Persona{
    constructor(nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    saludar(){
        console.log("Hola, eu sono "+this.nombre);
    }
}

let p1 = new Persona("Angustias","Malas",27);
console.log(p1);
p1.saludar();

class Empleado extends Persona{
    constructor(nombre, apellido, edad, puesto){
        super(nombre, apellido, edad);
        this.puesto = puesto;
    }

    trabajar(){
        console.log(`Aquí hay patacas. Cosecha propia. Para que se diga que no se traballa.`);
    }
    
}

let p2 = new Empleado("Arturo","Pendragon",44,"Balconista");
console.log(p2);
p2.saludar();
p2.trabajar();