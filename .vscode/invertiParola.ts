let parola1: string = prompt("inserisci parola1");
let parola2: string = prompt("inserisci parola2");
let parola3: string = parola1;

parola3=inverti(parola2,parola3);
console.log(parola3);

function inverti(parola2: string, parola3:string): string {
    
    for (let i = parola2.length - 1; i >= 0; i--) {
        parola3 += parola2.charAt(i);

    }
    return parola3;
}



