"use strict";




function BinarioADecimal(num) {
  // tu codigo aca

  var sumaDecimal = 0;
  var subIndiceString = num.length - 1;
  
  for (var i = 0; i < num.length ; i++) {
    var valorExp = Math.pow(2,i);
    sumaDecimal += valorExp * num.charAt(subIndiceString);
    subIndiceString --;
  }
  return sumaDecimal;
}


function DecimalABinario(num) {
  // tu codigo aca


  var numBinario = '';

  if (num === 0 || num === 1) return num;

  while (num > 1){
    numBinario = (num % 2) + numBinario;
    num = Math.floor(num/2);
  }
return "1"+numBinario;
}



// No se pueden usar: 
// parseInt
// toString



module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
