
function pariDispari(num: number): string {
    if (num % 2 == 0) {
        return "il numero è pari";
    }

    return "il numero è dispari";

}

function stampaRisultato(risultato: string): void {
    console.log("il numero è :" + risultato);

}
let input: number = prompt("inserisci un numero") * 1;
stampaRisultato(pariDispari(input));
