import validator from './validator.js';

 validAnswer.style.display = 'none';
 invalidAnswer.style.display = 'none';

document.getElementById("bValidar").addEventListener('click', () => {
let valorIngresado = document.getElementById("creditCardNumber").value;
let creditCardNumber = validator.isValid(valorIngresado);


let validNumber = document.getElementById("validNumber");
let invalidNumber = document.getElementById("invalidadNumber");
let valor = document.getElementById("creditCardNumber").value;
let validMask = validator.maskify(valor,validNumber,invalidNumber);




});

console.log(validator);
