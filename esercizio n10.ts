let num: string = prompt("inserisci un numero");
let A: string[] = num.split("");
console.log(+num - creArray(num));


function creArray(n: string[]): number {
    let A: string = "";

    for (let i = n.length - 1; i >= 0; i--) {
        A = A + n[i];
    }
    return +A;
}

                         