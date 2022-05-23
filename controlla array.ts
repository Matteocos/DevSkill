function popolArray(n:number):number[] {
    let A:number[]= [];
    for (let i=0; i<n; i++){
       A[i]= +prompt("inserisci un numero")
        
    }
return A
}


let x:number= +prompt("inserisci il divisore")
let A:number[]= popolArray(10);
controllArray(A,x)


function controllArray (A:number[] , x:number):void{
    let c:number=0;
    for(let i=0; i<A.length; i++ ){
        if (A[i] % x !=0){
            c++
        }
    }
    if(c==A.length){
        alert("OK")

    }
    else{
        alert("NO")
    }

}



