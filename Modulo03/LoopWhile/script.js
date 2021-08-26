// For Loop

/*

let texto = '';

for(let i = 1; i <= 50; i++) {
    texto = texto + i + '<br/>'

}

document.getElementById("demo").innerHTML = texto;

*/

// For Loop Array 

let carros = ['Ferrari', 'Fusca', 'Palio', 'Corolla'];

let html = '<ul>';

for(let i in carros) {
    html += '<li>'+ carros[i] + '</li>';
}

html += '</ul>';


document.getElementById("demo").innerHTML = html;