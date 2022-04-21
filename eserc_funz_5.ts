function annoBisestile(anno: number): string {


    if ((anno % 400 == 0) || (anno % 4 == 0 && anno % 100 != 0)) {
        return console.log("L'anno inserito è bisestile");
    }
    else {
        return console.log("L'anno inserito non è bisestile");
    }
}
let annocorrente: number = prompt("insersci l'anno") * 1;
annoBisestile(annocorrente);
