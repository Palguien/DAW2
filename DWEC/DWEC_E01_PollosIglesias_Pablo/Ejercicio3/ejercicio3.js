"use strict"
//Pablo Pollos

//devuelve null si no es cuadrada
function traza(array) {
    //comprueba que sea matriz cuadrada comparando el número de filas y columnas
    if(array.length != array[0].length){
        return null;
    }
    let traza = 0;
    //recorre la diagonal, sumando a traza los valores de sus posiciones
    for (let index = 0; index < array.length; index++) {
        traza=traza+array[index][index];
        
    }
    return traza;
    
}

//main
let arr1 = [[1,2,3],[4,5,6],[7,8,9]];
let arr2 = [[1,2,3],[4,5,6]];
console.log("TRAZAS DE MATRICES (Si no es cuadrada devuelve null)");
console.log(arr1);
console.log("traza del anterior array: "+traza(arr1));
console.log(arr2);
console.log("traza del anterior array: "+traza(arr2));