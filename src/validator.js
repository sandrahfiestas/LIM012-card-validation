const validator = {

  isValid (creditCardNumber){

// INVIERTE NUMEROS
const newArr = [];
for(let i= creditCardNumber.length-1; i >=0; i--){
  newArr.push( parseInt( creditCardNumber[i] ) );
}
// MULTIPLICA LAS POSICIONES PARES
let multiPar = [];
for(let i=0; i<newArr.length; ++i){
 if (i%2 !==0) {
   multiPar.push(newArr[i]*2);
   }
 else{
   multiPar.push(newArr[i]*1);
   }
}
// SUMA DOS DIGITOS
   let sumPar = [];
    for(let i=0; i<multiPar.length; ++i){
      if(parseInt(multiPar[i])>=10){
        sumPar.push(multiPar[i] - 9);
      }
        else {
          sumPar.push(multiPar[i]*1);
        }
      }
// SUMA ARRAY
      let sumArray = sumPar.reduce(function(a,b){
        return a+b;});
// MULTIPLO DE 10
      let state = false;
        if(sumArray%10 ==0){
          state = true;
        }
        return state;
}
  ,
  maskify (valorIngresado){
    let toMask = valorIngresado;
    let masked = toMask.replace(/.(?=.{4,}$)/g, '#');
    return masked
  }
};

export default validator;

//tc valida 4083952015263
