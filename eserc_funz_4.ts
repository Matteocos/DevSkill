function eta(input: number): string {
    if (input < 2022) {
        console.log("La tua eta è: " + (2022 - input) + " anni")
    }
    else if (input > 2022) {
        console.log(" O hai sbagliato ad inserire il numero, o vieni dal futuro ," + "nel caso tu venga dal futuro, nascerai tra : " + (- (2022 - input)) + " anni"
    }
    else {
        console.log("Sei nato quest'anno")
    }

}


let input: number = prompt("inserisci l'anno di nascita")
eta(input)