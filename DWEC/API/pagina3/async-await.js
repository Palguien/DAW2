"use strict"

function pintarPost(respuesta,index) {
    let cosa = document.getElementById('cosa');

    let h1 = document.createElement('h1');
    h1.textContent = respuesta.title;

    let user = document.createElement('a');
    user.setAttribute("href","index.html?userId="+respuesta.userId);
    user.textContent = respuesta.userId;

    let p = document.createElement('p');
    p.textContent = respuesta.body;

    let div = document.createElement('div');
    div.setAttribute("class","post post"+index);

    
    let button = document.createElement('button');
    button.textContent = "Comentarios";

    div.appendChild(h1);
    div.appendChild(user);
    div.appendChild(p);

    cosa.append(div);
}

function pintarComentario(comentario,index) {
    
    let div2 = document.createElement('div');
    div2.setAttribute("class","comment");

    let h2 = document.createElement('h2')
    h2.textContent = comentario.name

    let email = document.createElement('p')
    email.textContent = comentario.email

    let body = document.createElement('p')
    body.textContent = comentario.body

    let div = document.querySelector('.post'+index);
    div2.appendChild(h2);
    div2.appendChild(email);
    div2.appendChild(body);

    div.appendChild(div2);
}


    console.log("funciona");
    for (let index = 1; index <= 50; index++) {
        fetch('https://jsonplaceholder.typicode.com/posts/'+`${index}`)
        .then((response) => response.json())
        .then((json) =>pintarPost(json,index));
    
        fetch('https://jsonplaceholder.typicode.com/comments?postId='+`${index}`)
        .then((response) => response.json())
        .then((json) => json.forEach(element => {
            pintarComentario(element,index);
        }));
        
    }
    


console.log("funciona2");

