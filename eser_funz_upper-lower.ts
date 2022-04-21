function maiuscolo(nome: string, cognome: string): string {

    return nomecognome.toUpperCase();
}
function stampaRisultato(risultato: string): void {
    console.log(risultato);
}
let nome: string = prompt("inserisci il tuo nome");
let cognome: string = prompt("inserisci il tuo cognome");

let nomecognome: string = (nome + " " + cognome);

stampaRisultato(maiuscolo(nome, cognome));
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function minuscolo(nome: string, cognome: string): string {

    return nomecognome.toLowerCase();
}
function stampaRisultato(risultato: string): void {
    console.log(risultato);
}
let nome: string = prompt("inserisci il tuo nome in maiuscolo");
let cognome: string = prompt("inserisci il tuo cognome in maiuscolo");

let nomecognome: string = (nome + " " + cognome);

stampaRisultato(minuscolo(nome, cognome));

