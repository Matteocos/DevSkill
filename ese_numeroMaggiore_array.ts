let a :any= prompt("inserisci il primo numero")*1;
let b :any= prompt("inserisci il secondo numero")*1;
let c :any= prompt("inserisci il terzo numero")*1;
console.log("i numeri inseriti sono:"a+"-"+b+"-"+c)
let num:number []=[]
num[0]= a;
num[1]= b;
num[2]= c;
if(num[0]> num[1]&& num[0]>num[2]){
    console.log("il numero più grande è il primo inserito")
}
else if (num[1]>num[2] && num[1]>num[0]){
    console.log("il numero più grande è il secondo inserito ")
}else if (num[2]> num[1] && num[2]>num[0]){
    console.log("il numero più grande è il terzo inserito")
}
else{
    console.log("i due o più numeri più grandi sono uguali.")
    }

