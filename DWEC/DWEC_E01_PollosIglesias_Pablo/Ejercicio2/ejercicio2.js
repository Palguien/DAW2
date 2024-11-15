"use strict"
//Pablo Pollos
function fizzbuzz(n) {
    if(n<1){
        //en caso de que la entrada sea incorrecta
        console.log("Escribe un entero positivo");
    }else{
        for (let index = 1; index <= n; index++) {
            if(index){
                if(index%3==0 && index%5==0){
                    console.log("fizzbuzz");    //Divisible entre 5 y 3
                }else if(index%5==0){
                    console.log("buzz");    //Divisible entre 5, pero no 3
                }else if(index%3==0){
                    console.log("fizz");    //Divisible entre 3, pero no 5
                }else{
                    console.log(index);     //Ni divisible entre 5 ni 3
                }

            }
            
        }
    }
}

//main
let num=20;
console.log("--- FIZZBUZZ ---");
console.log("-- num = 20 --")
fizzbuzz(20);
console.log("-- num = 0 --")
fizzbuzz(0);
console.log("-- num = -5 --")
fizzbuzz(-5);