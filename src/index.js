import validator from './validator.js';

 let homePage = document.getElementById("homePage");
 homePage.classList.remove("hideAnswer");

 let bookDetail = document.getElementById("bookDetail");
 let pageValidateCard = document.getElementById("pageValidateCard");
 let resulPage = document.getElementById("resulPage");

 let validAnswer = document.getElementById("validAnswer");
 let invalidAnswer = document.getElementById("invalidAnswer");

 let validNumber = document.getElementById("validNumber");
 let invalidNumber = document.getElementById("invalidNumber");
 let alerta = document.getElementById("alerta");

document.getElementById("bookDetails").addEventListener('click',()=>{
  homePage.classList.add("hideAnswer");
  bookDetail.classList.remove("hideAnswer");
});

document.getElementById("evaluate").addEventListener('click',()=>{
  bookDetail.classList.add("hideAnswer");
  pageValidateCard.classList.remove("hideAnswer");
});

document.getElementById("backHomepage").addEventListener('click',()=>{
  pageValidateCard.classList.add("hideAnswer");
  homePage.classList.remove("hideAnswer");
});

document.getElementById("msgValidHome").addEventListener('click',()=>{
  validAnswer.classList.add("hideAnswer");
  homePage.classList.remove("hideAnswer");
});

document.getElementById("msgInvalidBack").addEventListener('click',()=>{
  invalidAnswer.classList.add("hideAnswer");
  pageValidateCard.classList.remove("hideAnswer");
});

document.getElementById("msgInvalidHome").addEventListener('click',()=>{
  invalidAnswer.classList.add("hideAnswer");
  homePage.classList.remove("hideAnswer");
});

 let formulario = document.getElementById("formulario");
 formulario.addEventListener('submit',(send)=>{
 send.preventDefault();

let valorIngresado = document.getElementById("creditCardNumber").value;

 if( isNaN(valorIngresado) ) {
  alerta.classList.remove("hideAnswer");
  }
  else {

  validator.isValid(valorIngresado);
  validator.maskify(valorIngresado);

 let rvalidNumber = validator.isValid(valorIngresado);
 if (rvalidNumber===true){

   pageValidateCard.classList.add("hideAnswer");
   resulPage.classList.remove("hideAnswer");

   validAnswer.classList.remove("hideAnswer");
   alerta.classList.add("hideAnswer");
   invalidAnswer.classList.add("hideAnswer");
 }
 else {
   pageValidateCard.classList.add("hideAnswer");
   resulPage.classList.remove("hideAnswer");

   invalidAnswer.classList.remove("hideAnswer");
   alerta.classList.add("hideAnswer");
   validAnswer.classList.add("hideAnswer");
 }

 let masked = validator.maskify(valorIngresado);
 validNumber.innerHTML = masked;
 invalidNumber.innerHTML = masked;

  }

 });
