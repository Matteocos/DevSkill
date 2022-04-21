function maiuscolo(nome: string, cognome: string): string {
    let nomecognome: string = (nome + " " + cognome)
    return console.log(nomecognome.toUpperCase())
}
let nome: string = prompt("inserisci il tuo nome")
let cognome: string = prompt("inserisci il tuo cognome")

maiuscolo(nome, cognome)



function minuscolo(nome: string, cognome: string): string {
    let nomecognome: string = (nome + " " + cognome)
    return console.log(nomecognome.toLowerCase())
}
let nome: string = prompt("inserisci il tuo nome")
let cognome: string = prompt("inserisci il tuo cognome")

minuscolo(nome, cognome)