import validator from './validator.js';

console.log(validator);

//FUNCION QUE LIMPIA EL FORMULARIO
  const limpiar=()=>{
   document.getElementById("titular").value=""; 
   for(let i=0;i<4;i++){
    document.getElementsByClassName("numero")[i].value="";
  }
    const mes= document.getElementById("mes-expiracion");
    mes.selectedIndex=mes.options[0];
    const age= document.getElementById("age-expiracion");
    age.selectedIndex=age.options[0];
    document.getElementById("cvv").value="";

  }
  const validar=()=>{
    if( document.getElementById("mes-expiracion").value=="Mes"){
      alert("Ingrese el mes de vencimiento de la tarjeta");
      return false;}
    else if(document.getElementById("age-expiracion").value=="Año"){
      alert("Ingrese el año de vencimiento de la tarjeta");
      return false; }
    if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ /s]*$/.test(document.getElementById("titular").value)){
      alert("Ingrese su nombre y apellido");
      return false;
    }
     else { return true;}
     
   }
//CREAMOS FUNCION DESPUES DE VALIDAR EL FORMULARIO
const load=()=>{
  let number="";
  for(let i=0;i<4;i++){
    let j=document.getElementsByClassName("numero")[i].value;
      number+=j;
  }
  let nombre=document.getElementById("titular").value;

//VERIFICACION DE LA TARJETA
  if(validator.isValid(number)){
    document.getElementById("formulario").style.display="none";
    document.getElementById("imgCard").style.display="inline-block";
    // Colocamos el numero enmascarado
    let numEnmascarado=document.getElementById("cardNumber");
    numEnmascarado.textContent=validator.maskify(number);
     //Colocamos el nombre del titular
    let nombreTitular=document.getElementById("cardName");
    nombreTitular.textContent=nombre.toUpperCase();
    document.getElementById("btnContinuar").style.display="inline-block";
    document.getElementById("mensajeError").style.display="none";
    document.getElementById("candado").style.display="none";
    document.getElementById("mensajeSeguro").style.display="none";
  }else{
    document.getElementById("mensajeError").style.display="inline-block";
    limpiar();

  }
}
//pasar automaticamente de input
const num1=document.getElementById("numero-tarjeta");
const num2=document.getElementById("numero-tarjeta1");
const num3=document.getElementById("numero-tarjeta2");
const num4=document.getElementById("numero-tarjeta3");
num1.addEventListener("keyup",function(){
  if(num1.value.length==num1.getAttribute("maxlength")){
    num2.focus();
  }
});
num2.addEventListener("keyup",function(){
  if(num2.value.length==num2.getAttribute("maxlength")){
    num3.focus();
  }
});
num3.addEventListener("keyup",function(){
  if(num3.value.length==num3.getAttribute("maxlength")){
    num4.focus();
  }
});
num4.addEventListener("keyup",function(){
  if(num4.value.length==num4.getAttribute("maxlength")){
    document.getElementById("titular").focus();
  }
});
//VALIDAMOS LOS CAMPOS DEL FORMULARIO
const form=document.getElementById("formulario");
form.addEventListener('submit',validarFormulario);
function validarFormulario(e){
  e.preventDefault();//nose envie el formulario a ningun lado

//LLAMAMOS ALA FUNCION DONDE SE ENMASCARA Y VALIDA LA TARJETA
if(validar()){
  load(); 
}     
}
