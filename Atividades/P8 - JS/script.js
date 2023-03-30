//Atividade Js
//Somar textos
 function maiorQ(){
    let resultadoExp =  document.querySelector('.resultadoExp')
    let inputStrings =  document.querySelectorAll('.maiorQ')
    resultadoExp.value = 
    parseInt(inputStrings[0].value) > parseInt(inputStrings[1].value) ? 
    `O maior número é o ${parseInt(inputStrings[0].value)}` : 
    `O maior número é o ${parseInt(inputStrings[1].value)}`
 }

 function notaDoAluno(){
    let resultadoAluno =  document.querySelector('.resultadoAluno')
    let nome =  document.querySelector('.nome')
    let notas =  document.querySelectorAll('.notas')
    let stringResultado 
   
   //Calculo notas
   let resultado = eval(`${notas[0].value} + ${notas[1].value}`)/ 2 
   if (resultado >= 7) {
      stringResultado = "Aprovado"
   } else if ( resultado < 7){
      stringResultado = "Reprovado"
   } else {
      stringResultado = "Aprovado com estrelinha !"
   }
   


    //Objeto aluno

   let aluno = {
      nome:nome.value,
      nota1:notas[0].value,
      nota2:notas[1].value,
      status:stringResultado
   }

   resultadoAluno.value = aluno.status
   
 }

 function parOuImpar(params) {
    let parOuImpar =  document.querySelector('.Par')
    parOuImpar.value % 2 == 0 ? alert('É PAR MACHADO') : alert('É IMPAR MACHADO')
 }




