"use strict"

document.addEventListener('DOMContentLoaded', () => {
    let respuesta = {}

    let xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    xhr.onload = () => {
        console.log(`Estado final de la solicitud: ${xhr.readyState}`);
        console.log(`Estado de la respuesta: ${xhr.status}`);

        if (xhr.readyState == 4 && xhr.status == 200) {
            respuesta = JSON.parse(xhr.responseText);
            console.log(`Al acabar la request: ${JSON.stringify(respuesta)}`);

            let h1 = document.createElement('h1');
            h1.textContent = respuesta.title;

            let p = document.createElement('p');
            p.textContent = respuesta.body;

            let div = document.querySelector('.main');
            div.appendChild(h1);
            div.appendChild(p);

            let comentarios = {}

            let xhr2 = new XMLHttpRequest();
            xhr2.open('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments');
            xhr2.onload = () => {
                comentarios = JSON.parse(xhr2.responseText);
                comentarios.forEach(comentario => {

                    // CALLBACK HELL
                    
                    let h2 = document.createElement('h2')
                    h2.textContent = comentario.name

                    let email = document.createElement('p')
                    email.textContent = comentario.email

                    let body = document.createElement('p')
                    body.textContent = comentario.body

                    div.appendChild(h2)
                    div.appendChild(email)
                    div.appendChild(body)
                });
            }
            xhr2.send();
        }
    }
    xhr.ontimeout = () => console.log('Se ha agotado el tiempo de espera');
    xhr.onabort = () => console.log('Se ha abortado la solicitud');
    xhr.onerror = () => console.log('Ocurrió un error ¯\\_(ツ)_/¯');
    xhr.onreadystatechange = () => console.log(`Nuevo estado de la solicitud: ${xhr.readyState}`);

    xhr.send();

    console.log(`Despues de send: ${xhr.readyState} ${xhr.status} ${JSON.stringify(respuesta)}`)
});
