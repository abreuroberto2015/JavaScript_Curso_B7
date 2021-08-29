let lista = [
    {id: 1, name: 'Roberto', sobrenome: 'Abreu'},
    {id: 2, name: 'Paulo', sobrenome: 'Silva'},
    {id: 3, name: 'José', sobrenome: 'Almeida'}
]; 

let pessoa = lista.find(function(item){
    return (item.sobrenome == 'Abreu') ? true : false;
});

/*
let lista = [45, 4, 9, 16, 25];
let lista2 = [];

lista2 = lista.findIndex(function(item){
    return (item ==16) ? true : false;
})
*/

/*
lista2 = lista.find(function(item){
    return (item ==16) ? true : false;
})
*/

let res = pessoa;

//let res = lista2;

console.log(res);