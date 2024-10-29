"use strict";

const CASILLAS_VALIDAS = ['1', '2', '3', '4', '5', '6', '7', '8', '9',];
const FICHAS = ['X', 'O',];

const FILA_IZQUIERDA = [1, 4, 7];
const FILA_DERECHA = [3, 6, 9];
const DIAGONAL_PRINCIPAL = [1, 5, 9];
const DIAGONAL_SECUNDARIA = [3, 5, 7];

let victoria = false;
let tablas = false;
let turnoActual = 0;


function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

function comprobarTablas() {
    if(turnoActual == 8) {
        tablas = true;
    }
}

function comprobarHorizontal(numeroCasilla) {
    if(document.getElementById("casilla-1").innerHTML==document.getElementById("casilla-2").innerHTML && document.getElementById("casilla-2").innerHTML==document.getElementById("casilla-3").innerHTML){
        victoria=true;
        return 1;
    }
    if(document.getElementById("casilla-4").innerHTML==document.getElementById("casilla-5").innerHTML && document.getElementById("casilla-5").innerHTML==document.getElementById("casilla-6").innerHTML){
        victoria=true;
        return 2;
    }
    if(document.getElementById("casilla-7").innerHTML==document.getElementById("casilla-8").innerHTML && document.getElementById("casilla-8").innerHTML==document.getElementById("casilla-9").innerHTML){
        victoria=true;
        return 3;
    }
    return 0;
}


function comprobarVertical(numeroCasilla) {
    if(document.getElementById("casilla-1").innerHTML==document.getElementById("casilla-4").innerHTML && document.getElementById("casilla-4").innerHTML==document.getElementById("casilla-7").innerHTML){
        victoria=true;
        return 1;
    }
    if(document.getElementById("casilla-2").innerHTML==document.getElementById("casilla-5").innerHTML && document.getElementById("casilla-5").innerHTML==document.getElementById("casilla-8").innerHTML){
        victoria=true;
        return 2;
    }
    if(document.getElementById("casilla-3").innerHTML==document.getElementById("casilla-6").innerHTML && document.getElementById("casilla-6").innerHTML==document.getElementById("casilla-9").innerHTML){
        victoria=true;
        return 3;
    }
    return 0;
}
function comprobarDiagonalPrincipal() {
    if(document.getElementById("casilla-1").innerHTML==document.getElementById("casilla-5").innerHTML && document.getElementById("casilla-5").innerHTML==document.getElementById("casilla-9").innerHTML){
        victoria=true;
        return true; 
    }else{
        return false;
    }
}
function comprobarDiagonalSecundaria() {
    if(document.getElementById("casilla-3").innerHTML==document.getElementById("casilla-5").innerHTML && document.getElementById("casilla-5").innerHTML==document.getElementById("casilla-7").innerHTML){
        victoria=true;
        return true; 
    }else{
        return false;
    }
}

function comprobarFinDeJuego(casilla) {
    const numeroCasilla = casilla.textContent;

    let aux=comprobarHorizontal(numeroCasilla);
    switch (aux) {
        case 1:
            document.getElementById("casilla-1").setAttribute("class","casilla ganador");
            document.getElementById("casilla-2").setAttribute("class","casilla ganador");
            document.getElementById("casilla-3").setAttribute("class","casilla ganador");
            break;
        case 2:
            document.getElementById("casilla-4").setAttribute("class","casilla ganador");
            document.getElementById("casilla-5").setAttribute("class","casilla ganador");
            document.getElementById("casilla-6").setAttribute("class","casilla ganador");
            break;
        case 3:
            document.getElementById("casilla-7").setAttribute("class","casilla ganador");
            document.getElementById("casilla-8").setAttribute("class","casilla ganador");
            document.getElementById("casilla-9").setAttribute("class","casilla ganador");
            break;
        default:
            break;
    }
    aux=comprobarVertical(numeroCasilla);
    switch (aux) {
        case 1:
            document.getElementById("casilla-1").setAttribute("class","casilla ganador");
            document.getElementById("casilla-4").setAttribute("class","casilla ganador");
            document.getElementById("casilla-7").setAttribute("class","casilla ganador");
            break;
        case 2:
            document.getElementById("casilla-2").setAttribute("class","casilla ganador");
            document.getElementById("casilla-5").setAttribute("class","casilla ganador");
            document.getElementById("casilla-8").setAttribute("class","casilla ganador");
            break;
        case 3:
            document.getElementById("casilla-3").setAttribute("class","casilla ganador");
            document.getElementById("casilla-6").setAttribute("class","casilla ganador");
            document.getElementById("casilla-9").setAttribute("class","casilla ganador");
            break;
        default:
            break;
    }

    if(comprobarDiagonalPrincipal(numeroCasilla)){
        document.getElementById("casilla-1").setAttribute("class","casilla ganador");
        document.getElementById("casilla-5").setAttribute("class","casilla ganador");
        document.getElementById("casilla-9").setAttribute("class","casilla ganador");
    };
    if(comprobarDiagonalSecundaria(numeroCasilla)){
        document.getElementById("casilla-3").setAttribute("class","casilla ganador");
        document.getElementById("casilla-5").setAttribute("class","casilla ganador");
        document.getElementById("casilla-7").setAttribute("class","casilla ganador");
    };

    comprobarTablas();

    if(victoria) {
        document.getElementById("mensajes").innerHTML='Gana ' + FICHAS[turnoActual % 2];
        finalizarJuego()
        return;
    }

    if(tablas) {
        document.getElementById("mensajes").innerHTML='Tablas';

        document.getElementById("casilla-1").setAttribute("class","casilla empate");
        document.getElementById("casilla-2").setAttribute("class","casilla empate");
        document.getElementById("casilla-3").setAttribute("class","casilla empate");
        document.getElementById("casilla-4").setAttribute("class","casilla empate");
        document.getElementById("casilla-5").setAttribute("class","casilla empate");
        document.getElementById("casilla-6").setAttribute("class","casilla empate");
        document.getElementById("casilla-7").setAttribute("class","casilla empate");
        document.getElementById("casilla-8").setAttribute("class","casilla empate");
        document.getElementById("casilla-9").setAttribute("class","casilla empate");
        finalizarJuego()
        return;
    }
    turnoActual++;
    document.getElementById("mensajes").innerHTML="Turno de "+FICHAS[turnoActual % 2];
}

function casillaOnClick(event) {
    let casilla = event.target;
    console.log("click en casilla "+ casilla.textContent);

    if(comprobarCasillaValida(casilla)) {
        casilla.textContent = FICHAS[turnoActual % 2];
        comprobarFinDeJuego(casilla);
        
    }
}

function main() {
    for(let i = 1; i <= 9; i++) {
//      let casilla = document.getElementById(`casilla-${i}`);
        let casilla = document.querySelector(`#casilla-${i}`);
        casilla.addEventListener('click', casillaOnClick);
    }

}

function finalizarJuego() {
    for(let i = 1; i <= 9; i++) {
//      let casilla = document.getElementById(`casilla-${i}`);
        let casilla = document.querySelector(`#casilla-${i}`);
        casilla.removeEventListener('click', casillaOnClick);
    }

}

main();