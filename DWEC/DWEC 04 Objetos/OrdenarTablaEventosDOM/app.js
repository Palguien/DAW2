"use strict"

class Empleado{
    #nombre
    #apellido
    #nacimiento
    #sueldo

    constructor(nombre, apellido, nacimiento, sueldo){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;

    }

    toString(){
        return `<tr><td>${this.#nombre}</td><td>${this.#apellido}</td><td>${this.#nacimiento}</td><td>${this.#sueldo}</td></tr>`;
    }

    getNombre(){
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getNacimiento(){
        return this.#nacimiento;
    }
    getSueldo(){
        return this.#sueldo;
    }
}

let empleados = [
    new Empleado("Paco","Fiestas",1997,33000),
    new Empleado("Chindas","Vinto",2001,27000),
    new Empleado("Chingas","Perma",1772,38000),
    new Empleado("Perma","Trago",1991,74000),
    new Empleado("Misty","Articuno",1987,37000),
    new Empleado("Giovanni","Vazquez",1000,20000),
    new Empleado("Lagartijo","Iguana",1993,54000),
]

let tabla = document.getElementById("lista-empleados");
let elementos = [];
empleados.forEach(empleado => { 
    tabla.innerHTML += empleado;
    elementos.push(empleado);
});
let flag = "";

//th clicables que ordenan por lo que indique cada uno

function refreshTabla(){
    tabla.innerHTML="";
    elementos.forEach(empleado => { 
        tabla.innerHTML += empleado;
    });
}

function ordenarSueldo() {
    if(flag=="sueldo"){
        let ordenSue = elementos.sort((a,b) => {
            return b.getSueldo() - a.getSueldo();
        });
        flag="sueldoReverse";
    }else{
        let ordenSue = elementos.sort((a,b) => {
            return a.getSueldo() - b.getSueldo();
        });
        flag="sueldo";
    }
        
    refreshTabla();
}

function ordenarNacimiento() {
    if(flag=="nacimiento"){
        let ordenNac = elementos.sort((a,b) => {
            return b.getNacimiento() - a.getNacimiento();
        });
        flag="nacimientoReverse";
    }else{
        let ordenNac = elementos.sort((a,b) => {
            return a.getNacimiento() - b.getNacimiento();
        });
        flag="nacimiento";
    }
    refreshTabla();
}

function ordenarApellido() {
    if(flag=="apellido"){
        let ordenApe = elementos.sort((a,b) => {
            return (b.getApellido()).localeCompare(a.getApellido());
        });
        flag="apellidoReverse";
    }else{
        let ordenApe = elementos.sort((a,b) => {
            return (a.getApellido()).localeCompare(b.getApellido());
        });
        flag="apellido";
    }
    refreshTabla();
}

function ordenarNombre() {
    if(flag=="nombre"){
        let ordenNom = elementos.sort((a,b) => {
            return (b.getNombre()).localeCompare(a.getNombre());
        });
        flag="nombreReverse";
    }else{
        let ordenNom = elementos.sort((a,b) => {
            return (a.getNombre()).localeCompare(b.getNombre());
        });
        flag="nombre";
    }
    refreshTabla();
}

document.getElementById("nombre").addEventListener("click", ordenarNombre);
document.getElementById("apellido").addEventListener("click", ordenarApellido);
document.getElementById("nacimiento").addEventListener("click", ordenarNacimiento);
document.getElementById("sueldo").addEventListener("click", ordenarSueldo);

