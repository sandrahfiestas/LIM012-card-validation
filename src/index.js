import validator from './validator.js';

rValida.style.display = 'none';
rInvalida.style.display = 'none';

document.getElementById("bValidar").addEventListener('click', () => {
let valorIngresado = document.getElementById("creditCardNumber").value;
let creditCardNumber = validator.isValid(valorIngresado);

let valor = document.getElementById("creditCardNumber").value;
let validMask = validator.maskify(valor);



});

console.log(validator);
