let X: number = +prompt("inserisci il numero X");

let sequenza: number[] = popolArray();


function popolArray(): number[] {
    let N: number = +prompt("inserisci il numero N ");

    let A: number[] = [];

    for (let i = 0; i < N; i++) {
        let n: number = +prompt("inserisci un numero");
        A.push(n);

    }
    return A;
}
function stampaRisultato(array:number[], X:number):string{
    let str:string="";
    
    for(let i=0; i<array.length; i++){
    if(sequenza[i] < X && sequenza[i]% 2==0){
    str= str+sequenza[i]

    }
    
} 
return str}

console.log(stampaRisultato(sequenza, X))