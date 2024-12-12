"use strict";

let ordenador = {
    "modelo": "JXP33",
    "marca":"Churrius",
    "precio":300000,
    "memoria":"16MB",
    "peso":"4000kg",
}

document.addEventListener('DOMContentLoaded',event => {
    document.cookie = "";

    console.log(`Las cookies antes: ${document.cookie}`);
    document.cookie = "Variable = true";
    console.log(`Las cookies después: ${document.cookie}`);

    localStorage.setItem("hacked","true");
    let hacked = localStorage.getItem("hacked");
    console.log(`localStorage Hacked = ${hacked}`);
    let sessionHacked = sessionStorage.getItem("hacked");
    console.log(`sessionStorage hacked = ${sessionHacked}`);

    sessionStorage.setItem("ordenador",JSON.stringify(ordenador));
    let miOrdenador = sessionStorage.getItem("ordenador");
    console.log(`Mi nuevo ordenador es`);
    console.log(miOrdenador);
    let nuevoObjeto = JSON.parse(miOrdenador);
    console.log(nuevoObjeto);

});