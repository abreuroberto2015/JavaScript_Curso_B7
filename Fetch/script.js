// Fetch
/*
function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando....'

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (json) {
            mostrarBlog(json);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function mostrarBlog(lista) {
    let html = '';

    for (let i in lista) {
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }
    document.getElementById("posts").innerHTML = html;
}
*/

// Async e Await

async function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando....';

    let req = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await req.json();
    mostrarBlog(json);

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (resultado) {
            return resultado.json();
        })
        .then(function (json) {
            mostrarBlog(json);
        })
        .catch(function (error) {
            console.log(error);
        });
}
function mostrarBlog(lista) {
    let html = '';

    for (let i in lista) {
        html += '<h3>' + lista[i].title + '</h3>';
        html += lista[i].body + '<br/>';
        html += '<hr/>';
    }
    document.getElementById("posts").innerHTML = html;
}
