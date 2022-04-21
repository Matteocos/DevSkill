function numeroMaggiore(input1: number, input2: number, input3: number): string {


    if (input1 > input2 && input1 > input3) {
        return "il numero più alto è il primo inserito";
    }
    else if (input2 > input1 && input2 > input3) {
        return "il numero più alto è il secondo inserito";
    }
    else if (input3 > input1 && input3 > input2) {
        return "il numero più alto è il terzo inserito";
    }

    return "due o più numeri inseriti sono uguali";

}

function stampaRisultato(risultato: string): void {
    console.log(risultato);
}

let input1: number = prompt("inserisci il primo numero") * 1;
let input2: number = prompt("inserisci il secondo numero") * 1;
let input3: number = prompt("inserisci il terzo numero") * 1;
stampaRisultato(numeroMaggiore(input1, input2, input3));