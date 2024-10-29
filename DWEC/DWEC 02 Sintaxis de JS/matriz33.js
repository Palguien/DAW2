
//trasposición
function trasposicion(arr){
    let mat2 = [[],[],[]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            mat2[j][i]=arr[i][j];
        }
    }
    return mat2;
}
//main
let mat = [[1,2,3], [4,5,6], [7,8,9]];
mat = trasposicion(mat);
//lectura
for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]);
}
