let arrayTabla = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
];
let turno = 'x1'; //Jugador que empieza, en este caso el X

const fichasX = ["x1", "x2", "x3"]
const fichasO = ["o1", "o2", "o3"]

const spanX1 = document.getElementById('TX1');
const spanX2 = document.getElementById('TX2');
const spanX3 = document.getElementById('TX3');
const spanO1 = document.getElementById('TO1');
const spanO2 = document.getElementById('TO2');
const spanO3 = document.getElementById('TO3');

const celdas = document.querySelectorAll('.celda');
const fichas = document.querySelectorAll('.ficha');
const turnoDiv = document.getElementById('turnoIMG');

let contadorX=[3,3,3];
let contadorO=[3,3,3];

turnoDiv.src="assets/x1.png";

fichas.forEach((ficha) => {
    ficha.addEventListener('click', () => {
        if(ficha.id=="x1" || ficha.id=="x2" || ficha.id=="x3"){
            if(contadorX[(ficha.id[1])-1]>0 && turno[0]===ficha.id[0]){ 
                const idFicha = ficha.id; // Obtiene el id de la ficha que selecciono
                turno=idFicha;
                switch(turno){
                    case "x1":
                        turnoDiv.src="assets/x1.png";
                        break;
                    case "x2":
                        turnoDiv.src="assets/x2.png";
                        break;
                    case "x3":
                        turnoDiv.src="assets/x3.png";
                        break;
                }
            }else{
                alert("No puedes elegir esta ficha");
            }
        }else{
            if(contadorO[(ficha.id[1])-1]>0 && turno[0]===ficha.id[0]){ 
                const idFicha = ficha.id; // Obtiene el id de la ficha que selecciono
                turno=idFicha;
                switch(turno){
                    case "o1":
                        turnoDiv.src="assets/o1.png";
                        break;
                    case "o2":
                        turnoDiv.src="assets/o2.png";
                        break;
                    case "o3":
                        turnoDiv.src="assets/o3.png";
                        break;
                }
                
            }else{
                alert("No puedes elegir esta ficha");
            }
        }
        
    });
});

celdas.forEach((celda, index) => {
    celda.addEventListener('click', () => {
        const fila = Math.floor(index / 3); // Fila de la casilla seleccionada
        const columna = index % 3; // Columna de la casilla seleccionada
        // Solo permite marcar celdas vacías
        if (verificarCelda(fila, columna)) {
            arrayTabla[Math.floor(index / 3)][index % 3] = turno;
            const img = document.createElement('img');
            // img.src = (turno === "x1") ? "assets/x1.png" : "assets/o1.png";
            switch(turno){
                case "x1":
                    img.src="assets/x1.png";
                    break;
                case "x2":
                    contadorX[1]--;
                    img.src="assets/x2.png";
                    spanX2.innerText = contadorX[1];
                    break;
                case "x3":
                    contadorX[2]--;
                    img.src="assets/x3.png";
                    spanX3.innerText = contadorX[2]; 
                    break;
                case "o1":
                    contadorO[0]--;
                    img.src="assets/o1.png";
                    break;
                case "o2":
                    contadorO[1]--;
                    img.src="assets/o2.png";
                    spanO2.innerText = contadorO[1]; 
                    break;
                case "o3":
                    contadorO[2]--;
                    img.src="assets/o3.png";
                    spanO3.innerText = contadorO[2]; 
                    break;
            }
            img.style.width = "80%"; 
            img.style.height = "80%";

            const imagenExistente = celda.querySelector('img'); //Comprueba si hay una imagen en la celda
            if (imagenExistente) {
                celda.replaceChild(img, imagenExistente); // Reemplaza la imagen existente
            } else {
                celda.appendChild(img); // Añade la nueva imagen
            }
            
            if (tresEnRaya(arrayTabla)) {
                alert("El jugador " + turno[0] + " ha ganado");
            } else if(!tresEnRaya(arrayTabla) && !arrayTabla.flat().includes(null) 
                && contadorX[1]==0 && contadorX[2]==0 && contadorO[1]==0 && contadorO[2]==0){
                alert("Empate");
            }else {
                turno = (turno[0] === "x") ? "o1" : "x1"; // Cambia el turno
                // turnoDiv.src = (turno === "x1") ? "assets/x1.png" : "assets/o1.png"; 
                switch(turno){
                    case "x1":
                        turnoDiv.src="assets/x1.png";
                        break;
                    case "x2":
                        turnoDiv.src="assets/x2.png";
                        break;
                    case "x3":
                        turnoDiv.src="assets/x3.png";
                        break;
                    case "o1":
                        turnoDiv.src="assets/o1.png";
                        break;
                    case "o2":
                        turnoDiv.src="assets/o2.png";
                        break;
                    case "o3":
                        turnoDiv.src="assets/o3.png";
                        break;
                }
            }
            
        }
    });
});

function verificarCelda(fila, columna){
    if(!arrayTabla[fila][columna] || turno[1]>arrayTabla[fila][columna][1]){ //Verifica si la celda correspondiente es distinta de null
        return true;
    }else{
        return false;
    }

}

function tresEnRaya(arrayTabla) {
    let ganador = false;

    // Comprobar filas
    for (let i = 0; i < arrayTabla.length; i++) {
        for (let j = 0; j < arrayTabla.length - 1; j++) {
            // Comparar solo el primer carácter de cada cadena
            if (arrayTabla[i][j] !== null && arrayTabla[i][j + 1] !== null && 
                arrayTabla[i][j].charAt(0) === arrayTabla[i][j + 1].charAt(0)) {
                ganador = true;
            } else {
                ganador = false;
                break;
            }
        }
        if (ganador) {
            return ganador;
        }
    }
    // Fin comprobar filas

    // Comprobar columnas
    for (let j = 0; j < arrayTabla.length; j++) {
        for (let i = 0; i < arrayTabla.length - 1; i++) {
            // Comparar solo el primer carácter de cada cadena
            if (arrayTabla[i][j] !== null && arrayTabla[i + 1][j] !== null && 
                arrayTabla[i][j].charAt(0) === arrayTabla[i + 1][j].charAt(0)) {
                ganador = true;
            } else {
                ganador = false;
                break;
            }
        }
        if (ganador) {
            return ganador;
        }
    }
    // Fin comprobar columnas

    // Comprobar diagonal \
    for (let i = 0; i < arrayTabla.length - 1; i++) {
        if (arrayTabla[i][i] !== null && arrayTabla[i + 1][i + 1] !== null) {
            if (arrayTabla[i][i].charAt(0) === arrayTabla[i + 1][i + 1].charAt(0)) {
                ganador = true;
            } else {
                ganador = false;
                break;
            }
        } else {
            ganador = false;
            break;
        }
    }
    if (ganador) {
        return ganador;
    }
    // Fin comprobar diagonal \

    // Comprobar diagonal /
    for (let i = 0; i < arrayTabla.length - 1; i++) {
        if (arrayTabla[i][arrayTabla.length - (i + 1)] !== null && 
            arrayTabla[i + 1][arrayTabla.length - (i + 2)] !== null) {
            if (arrayTabla[i][arrayTabla.length - (i + 1)].charAt(0) === 
                arrayTabla[i + 1][arrayTabla.length - (i + 2)].charAt(0)) {
                ganador = true;
            } else {
                ganador = false;
                break;
            }
        } else {
            ganador = false;
            break;
        }
    }
    // Fin comprobar diagonal /

    return ganador;
}
