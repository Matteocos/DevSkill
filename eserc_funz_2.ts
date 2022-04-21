function pariDispari(num: number): string {
    if (num % 2 == 0) {
        return console.log("il numero è pari");
    }
    else {
        return console.log("il numero è dispari");
    }
}


let input: number = prompt("inserisci un numero");
pariDispari(input)
