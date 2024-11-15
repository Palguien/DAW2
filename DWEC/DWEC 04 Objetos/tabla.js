"use strict"

//Nombre, APellidos, Año nacimiento, Sueldo

let empleados = [
    {//Atributos
        nombre: "Pepe",
        apellido: "García",
        nacimiento: 1999,
        sueldo: 30000 
    },
    {nombre: "Sandra", apellidos:"López",nacimiento:1999,sueldo:55000},
    {nombre: "Bilbo", apellidos:"Targaryen",nacimiento:1200,sueldo:80000},
    {nombre: "Danaerys", apellidos:"Bolsón",nacimiento:2432,sueldo:88888},
    
];

//filtrar por sueldos > 40000
let empleadosSueldoAlto = empleados.filter(empleados =>{
    return empleados.sueldo>60000
});


let empleadosOrdenNacimiento = empleados.sort((a,b)=>{
    return a.nacimiento - b.nacimiento;
});