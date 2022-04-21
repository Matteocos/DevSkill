function eta(input: number): string {
    if (input < 2022) {
        return "La tua eta è: " + (2022 - input) + " anni";
    }
    else if (input > 2022) {
        return " O hai sbagliato ad inserire il numero, o vieni dal futuro ," + "nel caso tu venga dal futuro, nascerai tra : " + (- (2022 - input)) + " anni";
    }
    return "Sei nato quest'anno";
}



function stampaRisultato(risultato: string): void {
    console.log(risultato);
}

let input: number = prompt("inserisci l'anno di nascita");
stampaRisultato(eta(input));