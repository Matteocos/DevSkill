
function ordinArray (array: number[]): number [] {
    for (let i=0; i < array.length-1; i++){
        for (let j=i+1; j <array.length; j++ ){
            if (array[i]>array[j]){
                const temp = array[i];
                array[i]= array[j];
                array[j]=temp;
             
            }
        }
    }
    
    return array
    
}

let dimensione:number = prompt("inserisci la dimensione dell array");
let array:number []= [];

for (let i=0; i <dimensione ; i++ ){
    let popolArray = +prompt( "inserisci il valore dell'array in posizione " +i)
    array.push(popolArray)
  
}
ordinArray(array)


function stampArray (array:number[]){
    let arrayDecrescente:number[]=[]
    let arrayCrescente:number []=[]
    let ordine:number = prompt( "i caratteri inseriti sono:   "+array+"  se vuoi i numeri in ordine crescente inserisci 1 \nse vuoi i numeri in ordine decrescente inserisci 2 ")
    if (ordine==1){
        for (let i=0; i<array.length;i++){
              arrayCrescente.push(array[i])
        }
        alert("il tuo array ordinato in modo decrescente è:  "+arrayCrescente)
    }
   


    else if(ordine==2) {
        for( let i=array.length -1; i>=0;i--){
         arrayDecrescente.push(array[i])
        }
        alert("il tuo array ordinato in modo decrescente è:  "+arrayDecrescente)
         
    }    
    else{
        alert("Puoi inserire solo 1 o 2")
    }
    
}
stampArray(array)