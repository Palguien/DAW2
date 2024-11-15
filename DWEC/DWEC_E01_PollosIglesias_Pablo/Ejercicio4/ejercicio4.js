"use strict"
//Pablo Pollos

//devuelve [null] si num no es positivo, [1] si num es 1, y los factores del numero dentro de un array en el resto de casos
function factorizar(num){
    if(num<1){  //num negativo o 0
        let arr = [null];
        return arr;
    }
    if(num==1){  //num = 1
        let arr = [1];
        return arr;
    }
    //Caso normal (num > 1)
    let arr = [];
    let aux = 0;
    while(aux!=1){
        //aux toma el valor del menor factor primo del número
        aux = menorFactorPrimo(num);
        if(aux!=1){        //comprueba que existe, de no hacerlo, activará la condición de salida
            arr.push(aux); //y de  ser así lo añade al array
        }
        num=num/aux; //actualiza el valor del número tras dividirlo entre el factor primo
    }
    return arr; //devuelve el array con los factores primos
}
//devuelve true si num es primo
function esPrimo(num) {
    if(num<2){  //Quita al 1, 0 y negativos, que no son primos
        return false;
    }
    //Si es divisible por cualquier número inferior a él (salvo 1), no es primo
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;   //de ser así, devuelve false
        }
    }
    //si ha llegado hasta aquí, es primo, devuelve true
    return true;
}
//determina el menor numero primo que divida al numero, si no hay ninguno, devuelve 1
function menorFactorPrimo(num) {
    for (let index = 2; index <= num; index++) {
        if(esPrimo(index)){ //comprueba si index es primo
            if(num%index==0){   //comprueba si index es factor del numero
                return index;
            }
        }
    }
    return 1;
}

//main
console.log("FACTORIZANDO NÚMEROS")
console.log("----- 17 -----");
console.log(factorizar(17));
console.log("----- 54 -----");
console.log(factorizar(54));
console.log("----- 99 -----");
console.log(factorizar(99));
console.log("----- 16 -----");
console.log(factorizar(16));
console.log("----- -5 -----");
console.log(factorizar(-5));
console.log("----- 1 -----");
console.log(factorizar(1));