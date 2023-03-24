let clientes = ['Bills', 'steve', 'goku']
// Acessando o índice
console.log(clientes[2]);


//Manipulando o Array

    // Adicionando um elemento novo
    clientes.push('vegeta')
    console.log(clientes);

    //remover um elemento do começo
    clientes.shift()
    console.log(clientes);

    //adiciona um elemento no começo do array
    clientes.unshift('Walther')
    console.log(clientes);

    //tamanho 
    console.log(clientes.length);

    //Objeto
    const cliente = {
        nome:'Goku',
        idade:50,
        ativo:true,
        endereco: {
            rua:'Cada do mestre kame',
            nº:3
        },
        filhos:['Gohan','Goten']

    }

    console.log(cliente);
