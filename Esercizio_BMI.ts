let alt_pie : number = prompt("inserisci la tua altezza in piedi");
let pes_lib: number = prompt("inserisci il tuo peso in libbre");
console.log("I dati inseriti sono: "+"Altezza: " +alt_pie+ (" piedi ")+" "+"Peso: " +pes_lib +" libbre")

let alt_mt : number = (alt_pie*0.3);
let pes_kg :number = (pes_lib*0.45);
let BMI : number = pes_kg/(alt_mt*alt_mt);
console.log( "BMI:" BMI );

if (BMI < 16.5){
    console.log("La costituzione di base è sottopeso severo");
} 
if (BMI>=16.5 && BMI <= 18.4) {
    console.log("La costituzione di base è sottopeso ");
} 
if (BMI >= 18.5 && BMI<= 24.4 ){
    console.log("La costituzione di base è normale");
}

if (BMI >= 25 && BMI <= 30 ){
    console.log("La costituzione di base è sovrappeso");
} 
if (BMI >= 30.1 && BMI<=34.9  ){
    console.log("La costituzione di base è Obesità primo grado  ");
}
if (BMI >= 35 && BMI <= 40 ){
    console.log("La costituzione di base è Obesità secondo grado");
}
if (BMI >40 ){
    console.log("La costituzione di base è gskianto");
}
let mis_polso: string= prompt("Vuoi effettuare una misurazione piu precisa? si/no");

if (mis_polso== "si"){
    let polso_cm :number= prompt("inserisci la misurazione della circonferenza del polso espressa in cm");
    let sesso: string  =prompt("Inserisci il tuo sesso");

    if((polso_cm < 17 && sesso=="m")||(polso_cm<15 && sesso=="f")){
        console.log("Corporatura esile");
    }
     if(((polso_cm == 17 || polso_cm==18) && sesso=="m")||(polso_cm==15 || polso_cm==16 )&& sesso=="f"){
        console.log("Corporatura normale");
    } 
    if((polso_cm >18 && sesso=="m")||(polso_cm> 16) && sesso== "f") {
        console.log("Corporatura robusta");
    }
    
}
else{
    console.log("Grazie ed Arrivederci");
  
}
