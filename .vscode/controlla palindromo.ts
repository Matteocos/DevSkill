
function controlla(parola: string): boolean {
    for (let i = 0; i < (parola.length) / 2; i++) {
        if (parola.charAt(i) != parola.charAt((parola.length - 1) - i)){
            return false;
        }
    }  
    return true;
}


let parola: string = prompt("inserisci una parola");
console.log(controlla(parola));