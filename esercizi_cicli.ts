//////////////////// MAX ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let input: number = prompt("inserisci un numero") * 1;
let max: number = input;
while (input != -1) {
    if (input > max) {
        max = input;
    }

    input = prompt("inserisci un numero") * 1;

}

console.log(max);
///////////////////// MIN /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let input: number = prompt("inserisci un numero") * 1;
let min: number = input;
while (input != -1) {
    if (input < min) {
        min = input;
    }

    input = prompt("inserisci un numero") * 1;

}

console.log(min);
///////////////////////////////////////////////// VETTORE/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let vettore: number[] = [12, 11, 333, 222, 444, 939, 5]
let max: number = vettore[0]
for (i = 0; i < vettore.length; i++) {
    if (vettore[i] > max) {
        max = vettore[i];
    }
}
console.log(max);
////////////////////////////////////////////////////////VETTORE 2/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let numInput: number = (prompt("inserisci un numero") * 1);
let num: number[] = [];
let max: number = numInput;
for (let i = 0; i < 10; i++) {
    num.push(numInput);
    numInput = prompt("inserisci di nuovo un  numero") * 1;
    if (num[i] > max) {
        max = num[i];
    }
}
alert("i numeri inseriti sono"+ num +"\nil numero più alto è: "+ max);