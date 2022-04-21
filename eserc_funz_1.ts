function posNeg(num: number): string {
    if (num >= 0) {
        return "il numero inserito:" + " " + num + "  è positivo.";
    }
    return "il numero inserito:" + " " + num + "  è negativo.";

}


let input: number = prompt("inserisci un numero") * 1;
console.log(posNeg(input));

