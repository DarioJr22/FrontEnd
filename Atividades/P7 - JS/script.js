//Atividade Js
//Somar textos
 function somarTexto(){
    let resultadoStr =  document.querySelector('.resultadoString')
    let inputStrings =  document.querySelectorAll('.somaString')
    resultadoStr.value = inputStrings[0].value + inputStrings[1].value
 }

 function somarNumeros(){
    let resultadoNumb =  document.querySelector('.resultadoNumer')
    let inputNumbers =  document.querySelectorAll('.somaNumber')
    resultadoNumb.value = eval( inputNumbers[0].value + inputNumbers[1].value)
 }

 function parOuImpar(params) {
    let parOuImpar =  document.querySelector('.Par')
    parOuImpar.value % 2 == 0 ? alert('É PAR MACHADO') : alert('É IMPAR MACHADO')
 }




