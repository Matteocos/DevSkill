function calcolaBase_perimetro(b:number, a:number):string{
  
    let areaRettangolo:number= base*altezza;
    let perimetro:number=(base*2)+(altezza*2);
    return alert("L'area del rettangolo è: "+areaRettangolo +"\nil perimetro è :"+ perimetro;)
  }
  let base:number= prompt("Inserisci la base")*1;
  let altezza:number= prompt("Inserisci l'altezza")*1;
  
    calcolaBase_perimetro(base, altezza)