"use strict";

document.addEventListener('DOMContentLoaded',event => {
    document.getElementById("enviar").addEventListener('click',guardarMensaje);
    document.getElementById("borrar").addEventListener('click',borrarLog);
    
    let array;
    if(localStorage.getItem("log")){
        array = JSON.parse(localStorage.getItem("log"));;
    }else{
        array = [];
    }
    //localStorage.setItem("log",JSON.stringify(array));
    //Load mensajes

    let table = document.getElementById("barra_mensajes");

    for (let index = 0; index < array.length; index++) {
        let div = document.createElement("div");
        if(index%2==0){
            div.setAttribute("class","yo");
        }else{
            div.setAttribute("class","otro");
        }
        console.log(array[index]);
        div.textContent=array[index];
        table.appendChild(div);
    }


});


function fechaActual(){
    let fecha = new Date();
    return fecha.toLocaleString();
}


function guardarMensaje(){
    let array = JSON.parse(localStorage.getItem("log"));
    array.push(document.getElementById("user").value+" ["+fechaActual()+"] - "+document.getElementById("mensaje").value);
    //array.push(document.getElementById("user").value+" ["+date.toISOtring()+"] - "+document.getElementById("mensaje").value);
    localStorage.setItem("log",JSON.stringify(array));
}

function borrarLog() {
    localStorage.setItem("log",JSON.stringify([]));
    window.location.href = "index.html";
}