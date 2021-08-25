/*

let carro ={
    nome: 'Fiat',
    modelo: 'Uno',
    peso: '800Kg',
    ligado:false,
    ligar:function(){
        this.ligado = true;
        console.log("VRUM VRUM")
    },
    acelerar:function(){
        if(this.ligado == true){
        console.log("RIIIIIIIII")
        } else {
            console.log(this.nome +" " + this.modelo+" não está ligado")
        }
    }
};

console.log("Modelo: "+carro.modelo );
carro.ligar();
carro.acelerar();

*/

let carros = [
    {nome: 'Fiat', modelo: 'Palio'},
    {nome: 'Fiat', modelo: 'Uno'},
    {nome: 'Toyota', modelo:'Corolla'},
    {nome:'Ferrari', modelo:'Spider'}   
];

console.log(carros[2].nome);



