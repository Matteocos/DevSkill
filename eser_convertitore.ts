alert("Questo è un convertitore di misurazioni online.")
function scelta(): string {

    let unitaMisura: number = prompt("Inserire 1 per convertire una Temperatura\nInserire 2 per convertire una Distanza")

    let ris: number

    if (unitaMisura == 1) {
        let gradi: number = prompt("che tipo di misurazione vuoi convertire?\nInserire 1 per Gradi Centigradi \ninserire 2 Gradi Fahrenheit");
        if (gradi == 1) {
            let celsius: number = prompt("Inserisci il valore in Celsius");
            ris = (celsius * 9) / 5 + 32;
            console.log(celsius + "°C corrispondono a " + ris + "°F");


        }
        else if (gradi == 2) {
            let Fahrenheit: number = prompt("Inserisci il valore in °F");
            ris = (Fahrenheit - 32) * 5 / 9;
            console.log(Fahrenheit + "°F corrispondono a " + ris + "°C");
        }

    }

    if (unitaMisura == 2) {
        let dist: number = prompt("Digitare 1 per convertire KM \nDigitare2 per convertire miglia");

        if (dist == 1) {
            let KM: number = prompt("Inserisci il valore in KM");
            ris = KM / 1.609;
            console.log(KM + "KM corrispondono a " + ris + " miglia");

        }

        if (dist == 2) {
            let miglia: number = prompt("Inserisci il valore in miglia");
            ris = miglia * 1.609;
            console.log(miglia + " miglia corrispondono a " + ris + "KM");
        }

    }

}
scelta()