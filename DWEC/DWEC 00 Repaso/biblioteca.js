//Comprobación de si es primo
function esPrimo(numero){
    let divisor=numero-1;
    while(numero%divisor!=0){
        divisor--;
    }
    if(divisor==1){
        return true;
    }else{
        return false;
    }
}
//Condicion para sumar, true si debe sumar
function deboSumar(numero){
    return esPrimo(numero);
}
//Suma
function sumando(numero1, numero2){
    return numero1+numero2;
}
//Suma numeros en un intervalo que cumplan una condicion 
function sumarCosas() {
    let tope = 100;
    suma = 0;
    console.log("los nºs primos hasta "+tope+" son:");
    for (let index = 1; index <= tope; index++) {
        if (deboSumar(index)) {
            suma = suma + index;
            console.log(index);
        }
    }
    console.log("Suma = " + suma);
}
//Dice los n primeros numeros primos
function primerosPrimos(numero) {
    let arrPrimos = [];
    let cont=0;
    console.log("los "+numero+ " nºs primos son:");
    while(arrPrimos.length<numero){
        if (esPrimo(cont)) {
            arrPrimos.push(cont);
        }
        cont++;
    }
    console.log(arrPrimos);
}
//main
console.log("Hola Mundo");
let b="11"
console.log(b+1);
console.log(b-1);
sumarCosas();

console.log("Suma+3="+sumando(3,suma));

primerosPrimos(100);


