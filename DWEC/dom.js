"use strict";

function noPulsarOnClick(e){
    alert("Dije 'no-pulsar' dickweed");
}

let boton = document.querySelector("#no-pulsar");
boton.addEventListener('click',noPulsarOnClick);

boton.addEventListener('click', function(e){
    alert("Dije 'no-pulsar' puto");
});

let cabecera = document.querySelector("#id1");
cabecera.addEventListener('click', () => { alert("HASKEEEL");});