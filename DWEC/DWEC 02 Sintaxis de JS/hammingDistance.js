//@author Pablo Pollos
//the Hamming distance between two strings of equal length is the number of positions at which the corresponding symbols are different. In other words,
// it measures the minimum number of substitutions required to change one string into the other, or the minimum number of errors that could have transformed
// one string into the other. In a more general context, the Hamming distance is one of several string metrics for measuring the edit distance between two sequences.
function distanciaHamming(cadena1, cadena2){
    let dis = 0;
    if(cadena1.length!=cadena2.length){
        return -1;
    }
    for (let i = 0; i < cadena1.length; i++) {
        if(cadena1[i]!=cadena2[i]){
            dis++;
        }
        
    }
    return dis;
}

function error(esperado, obtenido) {
    console.log(`ERROR: esperaba ${esperado}, obtuve ${obtenido}`);
}

function test_distanciaHamming() {
    let res = NaN;
    let numErrores = 0;

    if(res = distanciaHamming("hola", "hola") !== 0) {
        error(0, res);
        numErrores++;
    }
    if(res = distanciaHamming("hola", "bola") !== 1) {
        error(1, res);
        numErrores++;
    }
    if(res = distanciaHamming("hola", "paco") !== 4) {
        error(4, res);
        numErrores++;
    }
    if(res = distanciaHamming("hola", "patata") !== -1) {
        error(-1, res);
        numErrores++;
    }

    if(numErrores === 0) {
        console.log("Sin errores");
    } else {
        console.log(`${numErrores} errores`);
    }
}

test_distanciaHamming();
