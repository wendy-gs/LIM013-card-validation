const validator = {
// ENMASCARANDO NUMEROS DE TARJETA
	maskify: function(CardNumber){
//capturando los ultimos 4 digitos de la cadenas
  const numcarater=CardNumber.length;
	let	enmascarado;
	if(numcarater<=4){
    enmascarado=CardNumber;
  }else{
    enmascarado=(CardNumber.replace(/\w/g,"#")).slice(0,numcarater-4)+CardNumber.slice(numcarater-4);
  }
  return enmascarado;
},
//VALIDANDO NUMERO DE TARJETA
isValid: function(CardNumber){
//creamos cadena inversa
  let inversa="";
  let position=CardNumber.length;
  for(let i=position-1;i>=0;i--){
    inversa+=CardNumber[i];
  }
  let verificacion=0;
  let pares=0;
  let impares=0;
  let variable=0;
  for(let i=0;i<position;i++){
    variable=parseInt(inversa[i]);
    if(i%2!=0){
      variable=variable*2;
      if(variable>=10){
      pares+=(variable%10)+(Math.floor(variable/10));
		  }else{
      pares+=variable;
		  }
    }else{
    impares+=variable;	
    }
  }
  verificacion=pares+impares;
  if(verificacion%10==0){
    return true;
  }else{
    return false;
  }
}

};
export default validator;
