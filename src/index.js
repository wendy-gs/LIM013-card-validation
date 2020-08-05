import validator from './validator.js';


//CREAMOS FUNCION QUE VALIDA Y ENMASCARA EL NUMERO DE TARJETA
const load=()=>{
  let number="";
  for(let i=0;i<4;i++){
    let j=document.getElementsByName("numero")[i].value;
    number+=j;
  }
  let nombre=document.getElementById("nombre").value;
//Verificacion dela tarjeta
  if(validator.isValid(number)){
    document.getElementById("formulario").classList.add("Ocultar");
    document.getElementById("imgCard").classList.remove("Ocultar");
    document.getElementById("imgCard").classList.add("Mostrar");
// Colocamos el numero enmascarado
    let numEnmascarado=document.getElementById("cardNumber");
    numEnmascarado.textContent=validator.maskify(number);
//Colocamos el nombre del titular
    let nombreTitular=document.getElementById("cardName");
    nombreTitular.textContent=nombre.toUpperCase();
    document.getElementById("btnContinuar").style.display="inline-block";
    document.getElementById("mensajeError").classList.add("Ocultar");
    document.getElementById("mensajeError").classList.remove("Mostrar");
  }else{
    document.getElementById("mensajeError").classList.add("Mostrar");
    document.getElementById("mensajeError").classList.remove("Ocultar");
    form.reset();
  }
}

//PASAR AUTOMATICAMENTE DE UN INPUT A OTRO
  const num1=document.getElementById("numTarjeta");
  const num2=document.getElementById("numTarjeta1");
  const num3=document.getElementById("numTarjeta2");
  const num4=document.getElementById("numTarjeta3");

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
    document.getElementById("nombre").focus();
  }
  });

//OBJETO DE EXPRESIONES REGULARES PARA VERIFIACION DEL FORMULARIO
const expr={
  numero:/^\d{4,4}$/,
  nombre:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ /s]*$/,
  codigo:/^\d{3,3}$/
}
const camposValidos={
  numTarjeta: false,
  numTarjeta1: false,
  numtarjeta2: false,
  numTarjeta3: false,
  nombre:false,
  cvv:false,
}

//VALIDAMOS LOS CAMPOS DEL FORMULARIO
const validarCampo=(expresion,input,grupo)=>{
  if(expresion.test(input.value)){
    document.getElementById(`grupo_${grupo}`).classList.remove("formulario_grupo_incorrecto")
    document.getElementById(`div_${grupo}`).classList.add("Ocultar")
    camposValidos[grupo]=true;

  }else{
    document.getElementById(`grupo_${grupo}`).classList.add("formulario_grupo_incorrecto");
    document.getElementById(`div_${grupo}`).classList.remove("Ocultar");
    camposValidos[grupo]=false;
  }
}

//VALIDAMOS LOS CAMPOS DEL FORMULARIO
const validarFormulario=(e)=>{
  switch(e.target.name){
    case"numero":
      if(expr.numero.test(e.target.value)){
        document.getElementById("grupo_numero").classList.remove("formulario_grupo_incorrecto");
        document.getElementById(e.target.id).classList.add("formulario_input1");
        document.getElementById(e.target.id).classList.remove("formulario_input");
        document.getElementById("div_numero").classList.add("Ocultar");
        camposValidos[e.target.id]=true;
      }else{
        document.getElementById("grupo_numero").classList.add("formulario_grupo_incorrecto");
        document.getElementById(e.target.id).classList.remove("formulario_input1");
        document.getElementById(e.target.id).classList.add("formulario_input");
        document.getElementById("div_numero").classList.remove("Ocultar");
        camposValidos[e.target.id]=false;
      }
    break;
    case"nombre":
      validarCampo(expr.nombre,e.target,"nombre");
    break;
    case"cvv_tarjeta":
      validarCampo(expr.codigo,e.target,"cvv");
    break;  
  }
}
  const fecha=document.querySelectorAll("#formulario select");
  fecha.forEach((seleccion)=>{
    seleccion.addEventListener("change",(e)=>{
      if( e.target.value=="Mes" || e.target.value=="Año"){
        document.getElementById("grupo_fecha").classList.add("formulario_grupo_incorrecto");
        document.getElementById("div_fecha").classList.remove("Ocultar");
      }else{
        document.getElementById("grupo_fecha").classList.remove("formulario_grupo_incorrecto");
        document.getElementById("div_fecha").classList.add("Ocultar");
      }
    })
  }) 

  //VALIDAMOS QUE EL CAMPO FECHA SE SELECCIONE
  const validarFecha=()=>{
    if(document.getElementById("expiracion").value!="Mes" &&  document.getElementById("age-expiracion").value!="Año"){
      return true;
    }else{
      document.getElementById("grupo_fecha").classList.add("formulario_grupo_incorrecto");
      document.getElementById("div_fecha").classList.remove("Ocultar");
      return false;
    }
  }

  // VALIDAMOS QUE EL INPUT DE NUMERO TARJETA Y CVV SOBRE SE PUEDA ESCRIBIR NUMEROS
const validarNumero=()=>{
  let keynum=event.keyCode || event.which;
  let tecla=String.fromCharCode(keynum);
  let numero="1234567890";
  if(numero.indexOf(tecla)==-1){
    event.preventDefault();
  } 
}
document.getElementById("cvv").addEventListener("keypress",validarNumero);
const casillaNumero=document.querySelectorAll('.formulario_input1');
casillaNumero.forEach((casilla)=>{
  casilla.addEventListener("keypress",validarNumero);
});

  const inputs= document.querySelectorAll('#formulario input');
  inputs.forEach((input)=>{
    input.addEventListener("keyup",validarFormulario)
    input.addEventListener("blur",validarFormulario)
  });

  const form=document.getElementById("formulario");
  form.addEventListener('submit',(e)=>{
    e.preventDefault();//nose envie el formulario a ningun lado
//LLAMAMOS ALA FUNCION DONDE SE ENMASCARA Y VALIDA LA TARJETA

    if(camposValidos.cvv && camposValidos.nombre && camposValidos.numTarjeta && camposValidos.numTarjeta1 && camposValidos.numTarjeta2 && camposValidos.numTarjeta3 && validarFecha()){
      load(); 
      document.getElementById("formulario_mensaje").classList.add("Ocultar");
      document.getElementById("formulario_mensaje").classList.remove("Mostrar");
    }else{
      document.getElementById("formulario_mensaje").classList.remove("Ocultar");
      document.getElementById("formulario_mensaje").classList.add("Mostrar");
    }    
  });
