"use strict"

function pintarPost(respuesta) {
    let h1 = document.createElement('h1');
    h1.textContent = respuesta.title;

    let p = document.createElement('p');
    p.textContent = respuesta.body;

    let div = document.querySelector('.main');
    div.appendChild(h1);
    div.appendChild(p);
}

function pintarComentario(comentario) {
    let h2 = document.createElement('h2')
    h2.textContent = comentario.name

    let email = document.createElement('p')
    email.textContent = comentario.email

    let body = document.createElement('p')
    body.textContent = comentario.body

    let div = document.querySelector('.main');
    div.appendChild(h2)
    div.appendChild(email)
    div.appendChild(body)
}

document.addEventListener('DOMContentLoaded', async () => {
    /*fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    .then((response) => response.json())
    .then((json) =>*/

    const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const respuesta = await res.json();
    pintarPost(respuesta);
   
    const res2 = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
    const comentarios = await res2.json();
    comentarios.forEach(pintarComentario);
});
