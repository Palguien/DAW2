"use strict"
//Pablo Pollos
function esBisiesto(year) {
    if(year%400==0){
        return true;    //Divisible entre 400
    }else{
        if(year%100==0){
            return false;   //Divisible entre 100, pero no entre 400
        }else if (year%4==0) {
            return true;    //Divisible entre 4, pero no entre 100
        }else{
            return false;   //Otros casos
        }
    }
}

//main
console.log("¿1200 es bisiesto?: "+esBisiesto(1200));
console.log("¿1300 es bisiesto?: "+esBisiesto(1300));
console.log("¿1204 es bisiesto?: "+esBisiesto(1204));
console.log("¿1205 es bisiesto?: "+esBisiesto(1205));