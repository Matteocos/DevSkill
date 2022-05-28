
let parola1: string = prompt("inserisci parola1 ");
let parola2: string = prompt("inserisci parola2 della stessa lunghezza di parola 1");


let parola3: string = mixaParole(parola1, parola2);
console.log(parola3);

function mixaParole(parola1: string, parola2: string): string {
    let parola3: string = "";
    for (let i = 0; i < parola2.length ; i++) {
        parola3 += parola1.charAt(i) + parola2.charAt(i + 1);
        i++;
    }
    return parola3;
}