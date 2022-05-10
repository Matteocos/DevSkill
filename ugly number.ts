let indice: number = 1;
let number: number = 0;

while (indice != 1500) {
    number++;
    if( number%2==0 || number%3==0 ||number%5==0){
        let brutto =true;
        for (let divisore=2 ; divisore <number ; divisore++){
            if ((number % divisore ==0 ) && ( divisore!=2 && divisore!=3 && divisore!=5)){
                brutto= false
            }
        }
        if(brutto==true){
            indice++
        }
    }
}
alert("il 1500° bad number è :" + number)
