const validator = {

  isValid (creditCardNumber,parrafo){

// INVIERTE NUMERO
const newArr = [];
for(let i= creditCardNumber.length-1; i >=0; i--){
  // console.log( typeof cardNumber[i] );
  // console.log( parseInt( cardNumber[i] ) );
  newArr.push( parseInt( creditCardNumber[i] ) );
}
  //console.log(newArr);

//MULTIPLICAR lOS PARES
let multiPar = [];
for(let i=0; i<newArr.length; ++i){
 if (i%2 !==0) {
   multiPar.push(newArr[i]*2);
   }
 else{
   multiPar.push(newArr[i]*1);
   }
}
//console.log('Multi par: ' + multiPar);


// SUMADO DOS DIGITOS
   let sumPar = [];
    for(let i=0; i<multiPar.length; ++i){
      if(parseInt(multiPar[i])>=10){
        sumPar.push(multiPar[i] - 9);
      }
        else {
          sumPar.push(multiPar[i]*1);
        }
      //  validAnswer.style.display = 'block';
      }
    //  console.log(sumPar);
      let sumArray = sumPar.reduce(function(a,b){
        return a+b;});
    //console.log('Suma Total:  '+sumArray);


        if(sumArray%10 ==0){
        //alert('numero valido');
        validAnswer.style.display = 'block';
        }
        else{
        //alert('numero invalido');
        invalidAnswer.style.display = 'block';
        }
}
  ,
  maskify (validMask){
    let paraMascara = validMask;
    let enmascarado = paraMascara.replace(/.(?=.{4,}$)/g, '#');
    validNumber.innerHTML= enmascarado
    invalidNumber.innerHTML=enmascarado
    //console.log(paraMascara);
    //console.log(enmascarado);

  }
};

export default validator;

//tc valida 4083952015263
