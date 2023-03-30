logado = true
switch (logado){
    case true:console.log('Usuário logado')
    break;

    case false:console.log('Usuário não logado')
    break;
}

let mes = "abril"
switch(mes){
    case 'fevereiro':
    case 'março':
    case 'abril':
        console.log('1º Trimestre');
        break;
    case 'junho':
    case 'julho':
    case 'agosto':
        console.log('2º Trimestre');
        break;
    default:
        console.log("fora do período letivo");
}

for(let i = 0; i > -11;i--){
    console.log(i);

}
