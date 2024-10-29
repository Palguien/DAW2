function repetidos(arr) {
    let rep = [];
    let copy = [];
    for (let index = 0; index < arr.length; index++) {
        if(copy.includes(arr[index])==false){
            copy.push(arr[index]);
        }
        
    }
    for (let i = 0; i < copy.length; i++) {
        let reps = 0;
        for (let j = 0; j < arr.length; j++) {
            if(copy[i]==arr[j]){
                reps++;
            }
            
        }
        rep.push(reps);
        
    }
    return rep;
    
}
//main
let arr = [2,3,2,2];
console.log(arr);
console.log(repetidos(arr));
arr = [1,1,1];
console.log("-----------------------");
console.log(arr);
console.log(repetidos(arr));
arr = [2,3,3,2];
console.log("-----------------------");
console.log(arr);
console.log(repetidos(arr));