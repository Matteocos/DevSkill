function popolArray(): number[] {
    let A: number[] = [];
    let n: number = +prompt("inserisci un numero");
    while (n != -1) {

        A.push(n);

        n = +prompt("inserisci un numero");
    }
    return A;
}


function controllaNumero( N:number, array:number[]):string{
    let c:number=0;
    for(let i=0; i<array.length;i++){
        if(array[i] <= N){
            c++;
            if(c==N){
                return "OK";
            }
        }else{
          c=0;
          
        }
    }
    return "NO"
}



let N: number = +prompt("inserisci il numero da controllare");
let array: number[] = popolArray();
console.log(controllaNumero(N,array));

