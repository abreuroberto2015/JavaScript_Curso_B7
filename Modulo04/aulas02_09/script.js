                                 // Operador Rest
/*
function adicionar(...numeros) {
    console.log(numeros);
}
adicionar(5,6,7,8,9,10);
*/

/*
function adicionar(...nomes) {
    console.log(nomes);
}
adicionar("Beto", "João", "Carlos");
*/

/*
function adicionar(nomes, ...novosNomes) {
    let novoConjunto = [
        ...nomes,
        ...novosNomes
    ];

    return novoConjunto;
}

let nomes = ["Beto", "João", "Carlos"];
let outros = adicionar(nomes, "Arthur", "Brenda");

console.log(outros);
*/

                                     //Includes e Repeat 
/*
let lista = ['ovo', 'café', 'milho', 'arroz'];

console.log(lista.includes('carne'));
*/

                                          //  Objeto: Key, Values e Entries
/*                                          
let pessoa = {
    nome: 'Roberto', 
    sobrenome: 'Abreu',
    idade: 43
};

console.log(Object.keys(pessoa));
*/

                                    // String, padStart, padEnd
/*                                    
let telefone = '5';

console.log(telefone.padEnd(9, '*'));
*/

let cartao = '1234568965893256'

let lastDigits = cartao.slice(-4);

let cartaoMascarado = lastDigits.padStart(16, '*');

console.log('Este é o seu cartão ? ' + cartaoMascarado);



                                    

