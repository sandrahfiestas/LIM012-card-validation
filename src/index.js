import validator from './validator.js';

 let validAnswer = document.getElementById("validAnswer")
 let invalidAnswer = document.getElementById("invalidAnswer")
 validAnswer.style.display = 'none';
 invalidAnswer.style.display = 'none';

 let validNumber = document.getElementById("validNumber");
 //let invalidNumber = document.getElementById("invalidNumber");



document.getElementById("bValidar").addEventListener('click', () => {
let valorIngresado = document.getElementById("creditCardNumber").value;
validator.isValid(valorIngresado);


//let valor = document.getElementById("creditCardNumber").value;
validator.maskify(valorIngresado);


let rvalidNumber = validator.isValid(valorIngresado);
if (rvalidNumber===true){
  validAnswer.style.display = 'none'
}


let masked = validator.maskify(valorIngresado);
validNumber.innerHTML = masked;

});
