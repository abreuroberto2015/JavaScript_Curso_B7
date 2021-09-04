/*
                        // Código síncrono 

let nome = 'Beto';
let sobrenome = 'Abreu';
let completo = nome + ' ' +sobrenome;

*/

/*  

                    // Código assíncrono

let nome = 'Beto';
let sobrenome = 'Abreu';
let temperatura = Maquininha.pegarTemperatura(); //assíncrona
let completo = nome + ' ' +sobrenome;

*/

/*
                        //Callbacks         
function alertar() {
    console.log("Opa, tudo bem");
}
let nome = 'Beto';
setTimeout(alertar, 2000);
let sobrenome = 'Abreu';
console.log("Nome completo " + nome + ' ' + sobrenome);

*/

                        //Promises
function pegarTemperatura(){
    return new Promise(function(resolve, reject){
        console.log("pegando temperatura");

        setTimeout(function(){
            resolve('40 na sombra');
        },2000);
    });
}                       
                    // usando a promise
let temp = pegarTemperatura();      
temp.then(function(resultado){
    console.log("Temperatura: "+resultado);
});      
temp.catch(function(err){
    console.log("ERRO");
})


