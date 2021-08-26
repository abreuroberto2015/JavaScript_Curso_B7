let dia = 5;
let diaNome = 'Nome';

switch(dia){
    case 1:
        diaNome = 'Segunda-Feira';
        break;
        case 2:
        diaNome = 'Terça-Feira';
        break;
        case 3:
        diaNome = 'Quarta-Feira';
        break;
        case 4:
        diaNome = 'Quinta-Feira';
        break;
        case 5:
        diaNome = 'Sexta-Feira';
        break;
        case 6:
        diaNome = 'Sábado-Feira';
        break;
        case 7:
        diaNome = 'Domingo';
        break;     
} 

document.getElementById("dia").innerHTML = "Hoje é : " + diaNome;