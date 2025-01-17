"use strict"


    queryString = window.location.search;
    console.log(queryString);
    urlParams = new URLSearchParams(queryString);
    id = urlParams.get('userId')

    fetch('https://jsonplaceholder.typicode.com/users/'+`${id}`)
        .then((response) => response.json())
        .then((respuesta) =>pintarPost(respuesta));

    fetch('https://jsonplaceholder.typicode.com/albums?userId='+`${id}`)
        .then((response) => response.json())
        .then((json) => json.forEach(element => {
            pintarAlbum(element);
        }));

    fetch('https://jsonplaceholder.typicode.com/todos?userId='+`${id}`)
        .then((response) => response.json())
        .then((json) => json.forEach(element => {
            pintarTodos(element);
        }));    




function pintarPost(respuesta) {
    let cosa2 = document.getElementById('cosa2');

    let h1 = document.createElement('h1');
    h1.textContent = respuesta.name;

    let mail = document.createElement('p');
    mail.textContent = respuesta.email;

    let user = document.createElement('p');
    user.textContent = respuesta.username;

    let div = document.createElement('div');
    div.setAttribute("class","user");

    div.appendChild(h1);
    div.appendChild(user);
    div.appendChild(mail);

    cosa2.append(div);
}   

function pintarAlbum(respuesta) {
    let albums = document.getElementById('albums');

    let p = document.createElement('p');
    p.textContent = "- "+respuesta.title;

    albums.append(p);
}   

function pintarTodos(respuesta) {
    let todos = document.getElementById('todos');

    let p = document.createElement('p');
    p.textContent = "- "+respuesta.title;

    todos.append(p);
}   