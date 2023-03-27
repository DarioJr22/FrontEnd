const clientesxyz = [
    {
        nome:'Kaio',
        idade:15,
        soma:1231
    },
    {
        nome:'Maria',
        idade:18,
        soma:1231
    },
    {
        nome:'José',
        idade:35,
        soma:1231
    }
]
 
//Exibindo valores os valores de cada objeto 

clientesxyz.forEach(i => console.log(`Nome do cliente ${i.nome}`))


// find

console.log(clientesxyz.find(i =>  i.idade <= 18));


// map 

console.log(clientesxyz.map(a => a.soma - 1000*Math.random().toFixed(2)));

// filter

console.log(clientesxyz.filter(i => i.idade >= 18));