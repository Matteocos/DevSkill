function posNeg(num: number): string {
    if (num < 0) {
        return console.log("il numero inserito:" + " " + num + "  è negativo.");
    }
    if (num == 0) {
        return console.log("il numero inserito è 0");
    }
    if (num > 0) {
        return console.log("il numero inserito:" + " " + num + "  è positivo.");
    }
}


let input: number = prompt("inserisci un numero");

posNeg(input)