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

    
    render(){
        let fila = document.createElement("tr");

        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");

        nombre.textContent = this.#nombre;
        apellido.textContent = this.#apellido;
        nacimiento.textContent = this.#nacimiento;
        sueldo.textContent = this.#sueldo;

        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);

        return fila;
    }
}

let empleados = [
    new Empleado("Paco","Fiestas",1997,33000),
    new Empleado("Chindas","Vinto",2001,27000),
    new Empleado("Chingas","Perma",1772,38000),
    new Empleado("Perma","Trago",1991,74000),
    new Empleado("Misty","Articuno",1987,37000),
    new Empleado("Giovanni","Vazquez",1000,20000),
    new Empleado("Lagartijo","Iguano",1993,54000),
]

let tabla = document.getElementById("lista-empleados");
empleados.forEach(empleado =>{
    let fila=empleado.render();
    tabla.appendChild(fila);
});
let boton=document.getElementById("formulario-enviar");
boton.addEventListener('click',evento =>{
    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let apellido = document.getElementById('apellido').value;
    let nacimiento = document.getElementById('nacimiento').value;
    let sueldo = document.getElementById('sueldo').value;
    
    let empleado = new Empleado(nombre,apellido,nacimiento,sueldo);
    empleados.push(empleado);

    let tabla = document.getElementById("lista-empleados");
    let fila = empleado.render();
    tabla.appendChild(fila);
})