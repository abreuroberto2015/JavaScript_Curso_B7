// desconstruindo objetos 2

// desconstruindo arrays

/*
function criar(){
    return [1, 2, 3];
}

let [ a, b, c ] = criar();

console.log(a, b, c);
*/


//Arrow Functions

/*
function somar(x, y) {
    return x + y;
}
*/

/*
let somar = function(x, y) {
    return x + y;
}
*/
/*
let somar = (x, y) =>{
    return x + y;
}
*/

/*
let somar = (x, y) => x + y;
console.log(somar(10, 5));
*/

/*
let letrasNoNome = nome => nome.length; 
console.log(letrasNoNome('Roberto'));
*/

//Operador Spread

/*
let numeros = [1,2,3,4];

let outros = [...numeros, 5,6,7,8];

console.log(outros);
*/

/*
let info = {
    nome: 'Roberto', 
    sobrenome: 'Abreu',
    idade: 43
};

let novaInfo = {
    ...info,
    cidade: 'Rio dE Janeiro',
    estado: 'RJ',
    pais: 'Brasil'
};
console.log(novaInfo);
*/

function adicionarInfo(info) {
    let novasInfo = {
        ...info,
        status:0,
        token: 'jdhfjsadh',
        data_cadastro: '01/09/2021'
    };
    return novasInfo;
}
console.log(adicionarInfo({nome: 'Roberto', sobrenome: 'Abreu'}));