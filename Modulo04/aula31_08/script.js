/*
let nome ='Roberto';
let idade = 43;

//let frase = 'Meu nome é '+nome+', eu tenho '+idade+' anos e ano que vem eu farei '+(idade + 1)+' anos';

let frase = `Meu nome é ${nome}, eu tenho ${idade} anos e ano que vem eu farei ${idade+1} anos`;

console.log(frase);
*/

let pessoa = {
    nome: 'Beto',
    sobrenome: 'Abreu',
    idade: 43,
    social:{
        facebook: 'abreuroberto',
        instagram: 'abreu'
    }, 
    nomeCompleto: function(){
        return `${this.nome} ${this.sobrenome}`;
    }
};

let {nome,sobrenome,idade} = pessoa;

console.log(nome,sobrenome,idade);