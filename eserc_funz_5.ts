function annoBisestile(anno: number): string {


    if ((anno % 400 == 0) || (anno % 4 == 0 && anno % 100 != 0)) {
        return "L'anno inserito è bisestile";
    }

    return "L'anno inserito non è bisestile";

}
function stampaRisultato(risultato: string): void {
    console.log(risultato);
}
let annocorrente: number = prompt("insersci l'anno") * 1;
stampaRisultato(annoBisestile(annocorrente));
