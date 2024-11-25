"use strict"

class Empleado{
    #nombre
    #apellido
    #nacimiento
    #sueldo
    #email
    #dni
    #fecha

    constructor(nombre, apellido, nacimiento, sueldo, email, dni, fecha){
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
        this.#email = email;
        this.#dni = dni;
        this.#fecha = fecha;

    }

    toString(){
        return `<tr><td>${this.#nombre}</td><td>${this.#apellido}</td><td>${this.#nacimiento}</td><td>${this.#sueldo}</td><td>${this.#email}</td><td>${this.#dni}</td><td>${this.#fecha}</td></tr>`;
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
    getEmail(){
        return this.#email;
    }
    getDNI(){
        return this.#dni;
    }
    getFecha(){
        return this.#fecha;
    }

    
    render(){
        let fila = document.createElement("tr");

        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");
        let email = document.createElement("td");
        let dni = document.createElement("td");
        let fecha = document.createElement("td");

        nombre.textContent = this.#nombre;
        apellido.textContent = this.#apellido;
        nacimiento.textContent = this.#nacimiento;
        sueldo.textContent = this.#sueldo;
        email.textContent = this.#email;
        dni.textContent = this.#dni;
        fecha.textContent = this.#fecha;

        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);
        fila.appendChild(email);
        fila.appendChild(dni);
        fila.appendChild(fecha);

        return fila;
    }
}

let empleados = [
    new Empleado("Paco","Fiestas",1997,33000,"qwert@educa.jcyl.es","123456789A", "21/11/2024"),
    new Empleado("Chindas","Vinto",2001,27000,"asdf@gmail.com","929496789B", "21/11/2020"),
    new Empleado("Misty","Articuno",1987,37000,"aaa@yahoo.com","883456789C", "01/11/2023"),
    new Empleado("Giovanni","Vazquez",1000,20000,"bbb@gmail.com","123456449D", "21/09/2024"),
    new Empleado("Lagartijo","Iguano",1993,54000,"ccc@gmail.com","123456229E", "22/11/2024"),
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
    let email = document.getElementById('emailf').value;
    let dni = document.getElementById('dnif').value;
    let fecha = document.getElementById('fechaf').value;

    if(validarEmail(email) && validarDNI(dni) && validarFecha(fecha)){
        let empleado = new Empleado(nombre,apellido,nacimiento,sueldo,email,dni,fecha);
        empleados.push(empleado);

        let tabla = document.getElementById("lista-empleados");
        let fila = empleado.render();
        tabla.appendChild(fila);
    }else{
        if(!validarEmail(email)){
            alert("Email incorrecto");
        }
        if(!validarDNI(dni)){
            alert("DNI incorrecto");
        }
        if(!validarFecha(fecha)){
            alert("Fecha incorrecta, formato: DD/MM/YYYY");
        }
        
    }
})

function validarEmail(email) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validarDNI(dni) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[0-9]{8}[A-Z]$/;
    if (regex.test(dni)){
        let suma=0;
        let letra=dni[dni.length-1];
        for (let index = 0; index < dni.length-1; index++) {
            suma=suma+dni[index];
        }
        suma=suma%23;
        let letras=['T','R','W','A','G','M','Y','F','P','D','X','B',
            'N','J','Z','S','Q','V','H','L','C','K','E'];
        if(dni.length==9 && letras[suma]==letra){
            return true;
        }else{
            console.log("Letra incorrecta");
            return false;
        }
    }else{
        console.log("Formato incorrecto");
        return false;
    }
}

function validarFecha(fecha) {
    // Expresión regular para validar un correo electrónico
    const regex = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/;
    if(regex.test(fecha)){
        let day=fecha[0]+fecha[1];
        let month=fecha[3]+fecha[4];
        let year=fecha[6]+fecha[7]+fecha[8]+fecha[9];
        if(day==0 || year == 0){
            return false;
        }
        if(!(month>12 || month<1)){
            switch (parseInt(month)) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    //31 dias
                    if(day>31){
                        return false;
                    }
                    break;
                case 2:
                    //febrero
                    if(bisiesto(year) && day>29){
                        return false;
                    }else if(!bisiesto(year) && day>28){
                        return false;
                    }
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    //30 dias
                    if(day>30){
                        return false;
                    }
                    break;            
            }
            return true;
        }else{
            return false;
        }
    }
}

function bisiesto(year) {
    if(year%400==0){
        return true;
    }else if (year%100==0) {
        return false;
    }else if (year%4==0) {
        return true;
    }else{
        return false;
    }
    
}

document.getElementById("emailf").addEventListener("blur", blurEmail);
document.getElementById("dnif").addEventListener("blur", blurDni);
document.getElementById("fechaf").addEventListener("blur", blurFecha);

function blurEmail(){
    let email = document.getElementById("emailf").value; 
    if(!validarEmail(email) && email!=""){
        alert("Email incorrecto");
    }
}

function blurDni(){
    let dni = document.getElementById("dnif").value; 
    if(!validarDNI(dni) && dni!=""){
        alert("Dni incorrecto");
    }
}

function blurFecha(){
    let fecha = document.getElementById("fechaf").value; 
    if(!validarFecha(fecha) && fecha!=""){
        alert("Fecha incorrecta");
    }
}

