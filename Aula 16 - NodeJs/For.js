numeros = [22,342,3434,23,12,312,213]
let obj = {
    nome:'Ryu',
    especial:'Hadouken',
    skin:'roxo'
}

for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
    
}

for (const i of numeros) {
    
    console.log(i);
}


for (const i in obj) {
    
    console.log(obj[i]);
}


