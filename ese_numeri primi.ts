let NumeriPrimi = 0;
  let numero = 2;

   let message: string = ("I primi 30 numeri primi sono: ");


while (NumeriPrimi < 30) {
  let primo: boolean = true;

  for (let i = 2; i < numero; i++) {

    if (numero % i == 0) {
      primo = false;
    }
  }
  if (primo) {

    message += numero + " ";
    NumeriPrimi++;
  }



  numero++;
}

console.log(message);
