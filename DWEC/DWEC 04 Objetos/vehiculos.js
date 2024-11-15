"use strict"

//Constructor vehículo
//Constructor coche <- vehículo
//Constuctor Moto <- vehículo

function Vehiculo(matricula, ruedas, pasajeros) {
    this.matricula = matricula;
    this.ruedas = ruedas;
    this.pasajeros = pasajeros;    
}

//herencia
function Coche(matricula, pasajeros, autonomia, marca) {
    Vehiculo.call(matricula,4,pasajeros)
    this.autonomia = autonomia;
    this.marca = marca;
}

function Moto(matricula, pasajeros, autonomia, marca) {
    Vehiculo.call(matricula,2,pasajeros)
    this.autonomia = autonomia;
    this.marca = marca;
}

function Locomotora(matricula, pasajeros, autonomia, marca, ruedas) {
    Vehiculo.call(matricula,ruedas,pasajeros)
    this.autonomia = autonomia;
    this.marca = marca;
}
//Difinición de métodos de Objetos
Vehiculo.prototype.toString = function() {
    return `Vehículo de matrícula ${this.matricula} tiene ${this.ruedas} ruedas y ${this.pasajeros} pasajeros`
}

let barco1 = new Vehiculo("1234AB", 0, 12); 
console.log(barco1.toString());