"use strict";
//Pablo Pollos Iglesias
document.addEventListener('DOMContentLoaded',event => {
    document.getElementById("add-task").addEventListener('click',guardarMensaje);
    document.getElementById("borrar").addEventListener('click',borrarLog);
    
    let array;
    if(localStorage.getItem("log")){
        array = JSON.parse(localStorage.getItem("log"));;
    }else{
        array = [];
    }
    array.sort();
    //Load mensajes
    renderTareas(array);

});

function renderTareas(array){

    let lista = document.getElementById("lista");

    for (let index = 0; index < array.length; index++) {
        let li = document.createElement("li");
        li.setAttribute("id",`${index}`);
        if(array[index][1]=="pendiente"){
            li.setAttribute("class","element");
        }else{
            li.setAttribute("class","completado");
        }
        //console.log(array[index]);
        li.textContent=array[index][0];

        let checkbox = document.createElement("div");
        if(array[index][1]=="pendiente"){
            checkbox.setAttribute("class","checkbox");
        }else{
            checkbox.setAttribute("class","activeCheckbox");
        }
        
        checkbox.addEventListener('click',check);
        checkbox.setAttribute("id",`${index}C`);


        let borrarTarea = document.createElement("button");
        borrarTarea.setAttribute("class","borrarTarea");
        borrarTarea.setAttribute("id",`${index}B`);
        borrarTarea.textContent = "Borrar";
        borrarTarea.addEventListener('click',borrarElemento);

        li.appendChild(borrarTarea);
        li.appendChild(checkbox);

        lista.appendChild(li);
    }
}

function borrarElemento(){
    let id = event.target.getAttribute("id")
    id = id.replace('B','')

    let array = JSON.parse(localStorage.getItem("log"));
    array[id]="";
    array.sort();
    array.shift();
    document.getElementById(id).setAttribute("class","eliminado");

    localStorage.setItem("log",JSON.stringify(array));

}

function check(){

    let id = event.target.getAttribute("id")
    id = id.replace('C','')

    document.getElementById(id).setAttribute("class","completado");

    event.target.setAttribute("class","activeCheckbox");

    let array = JSON.parse(localStorage.getItem("log"));
    array[id][1]="completado";
    console.log(id);
    console.log(array);
    localStorage.setItem("log",JSON.stringify(array));

}

function guardarMensaje(){
    let tarea=document.getElementById("mensaje").value;
    renderTarea(tarea);
}

function renderTarea(tarea){
    if(tarea==''){
        alert("Tarea vacía");
    }else{
        let array = JSON.parse(localStorage.getItem("log"));
        array.push([tarea,"pendiente"]);
        localStorage.setItem("log",JSON.stringify(array));
    }
}

function borrarLog() {
    localStorage.setItem("log",JSON.stringify([]));
    window.location.href = "index.html";
}