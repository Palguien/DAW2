
//Media de las notas por alumno
function mediaAlumno(notas){
    for (let i = 0; i < notas.length; i++) {
        let total=0;
        for (let j = 1; j < notas[i].length; j++) {
            total=total+notas[i][j];
        }
        console.log("Media de "+notas[i][0]+" = "+total/3);
        
    }
}
//Media de las notas por trimestre
function mediaTrimestre(notas){
    for (let i = 1; i < notas[0].length; i++) {
        let total=0;
        for (let j = 0; j < notas[i].length; j++) {
            total=total+notas[j][i];
        }
        console.log("Media del trimestre "+i+" = "+total/4);
        
    }
}

//main
let notas = [["fulanito",8,7,9],["chindasvinto",10,9,5],["recesvinto",6,6,7],["felipe",7,4,5]];
mediaAlumno(notas);
mediaTrimestre(notas);