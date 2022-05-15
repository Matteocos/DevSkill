function altezze(): number[] {
    let arrayAltezze: number[] = [];

    while (arrayAltezze.length < numeroMuri) {
        let altezza: number = +prompt("inserisci le altezze dei muri che mario dovra saltare, inserisci le altezze da sinistra a destra (altezza max 10)");
        if (altezza <= 10) {

            arrayAltezze.push(altezza)
        }
        else {
            alert("hai inserito un numero maggiore di 10")
        }
    }
    console.log(arrayAltezze)
    return arrayAltezze
}
let numeroMuri: number = +prompt("inserisci il numero di muri che deve saltare mario")

let saltoSu: number = 0
let saltoGiu: number = 0
function contaSalti(arrayAltezze: number[]): any {


    for (let i = 0; i < arrayAltezze.length - 1; i++) {
        if (arrayAltezze[i] > arrayAltezze[i + 1]) {
            saltoGiu = saltoGiu + 1;

        }
        else {
            saltoSu = saltoSu + 1


        }

    }
    return
}



contaSalti(altezze())
alert("i salti sono stati: " + (numeroMuri -1) + " verso l alto sono stati:  " + saltoSu + " , i salti verso il basso sono stati: " + saltoGiu)
