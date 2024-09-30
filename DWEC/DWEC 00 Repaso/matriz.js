function matriz(num){
    let mat = [];
    for (let index = 0; index < num; index++) {
       mat.push([]);
        
    }
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < num; j++) {
            if(i==j){
                mat[i][j]=1;
            }else{
                mat[i][j]=0;
            }
            
        }
        
    }

    for (let index = 0; index < num; index++) {
        console.log(mat[index]);
        
    }    

}
//main
matriz(5);