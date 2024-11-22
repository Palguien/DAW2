let body = document.getElementById("body");
let bloque = document.createElement("div");

let titulo = document.createElement("h1");
let texto = document.createElement("p");
titulo.textContent = "TITULO";
texto.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas esse mollitia consequuntur, earum dolorem sed officia nemo adipisci dolor cupiditate placeat veniam! Rem distinctio commodi aliquam, tenetur ratione quisquam.";
body.appendChild(bloque);
bloque.appendChild(titulo);
bloque.appendChild(texto);

let form = document.createElement("form");
form.setAtttribute("action","get");
form.setAtttribute("class","formulario");
body.appendChild(form);



//element.setAttribute(attr, value)
//miElemento.serAttribite("class","nuevaClase")