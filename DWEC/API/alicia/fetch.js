"use strict"

document.addEventListener('DOMContentLoaded', () => {

    fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => res.json())
    .then(respuesta => {
        let h1 = document.createElement('h1');
        h1.textContent = respuesta.title;

        let p = document.createElement('p');
        p.textContent = respuesta.body;

        let div = document.querySelector('.main');
        div.appendChild(h1);
        div.appendChild(p);

        return fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
    })
    .then(res => res.json())
    .then(comentarios => {
        comentarios.forEach(comentario => {            
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
        });
    })
});
