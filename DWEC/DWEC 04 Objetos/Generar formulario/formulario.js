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
form.setAttribute("action","get");
form.setAttribute("class","formulario");
body.appendChild(form);

let div1 = document.createElement("div");
div1.setAttribute("class","formulario-fila");
form.appendChild(div1);

let label1 = document.createElement("label");
label1.setAttribute("for","nombre");
label1.textContent = "Nombre";
div1.appendChild(label1);

let input1 = document.createElement("input");
input1.setAttribute("type","text");
input1.setAttribute("name","nombre");
input1.setAttribute("id","nombre");
div1.appendChild(input1);

let div2 = document.createElement("div");
div2.setAttribute("class","formulario-fila");
form.appendChild(div2);

let label2 = document.createElement("label");
label2.setAttribute("for","apellido");
label2.textContent = "Apellido";
div2.appendChild(label2);

let input2 = document.createElement("input");
input2.setAttribute("type","text");
input2.setAttribute("name","apellido");
input2.setAttribute("id","apellido");
div2.appendChild(input2);

let div3 = document.createElement("div");
div3.setAttribute("class","formulario-fila");
form.appendChild(div3);

let label3 = document.createElement("label");
label3.setAttribute("for","nacimiento");
label3.textContent = "Nacimiento";
div3.appendChild(label3);

let input3 = document.createElement("input");
input3.setAttribute("type","number");
input3.setAttribute("name","nacimiento");
input3.setAttribute("id","nacimiento");
input3.setAttribute("value","1999");
div3.appendChild(input3);

let div4 = document.createElement("div");
div4.setAttribute("class","formulario-fila");
form.appendChild(div4);

let label4 = document.createElement("label");
label4.setAttribute("for","sueldo");
label4.textContent = "Sueldo";
div4.appendChild(label4);

let input4 = document.createElement("input");
input4.setAttribute("type","number");
input4.setAttribute("name","sueldo");
input4.setAttribute("id","sueldo");
div4.appendChild(input4);

let div5 = document.createElement("div");
div5.setAttribute("class","formulario-fila");
form.appendChild(div5);

let label5 = document.createElement("label");
label5.setAttribute("for","email");
label5.textContent = "Email";
div5.appendChild(label5);

let input5 = document.createElement("input");
input5.setAttribute("type","text");
input5.setAttribute("name","email");
input5.setAttribute("id","emailf");
div5.appendChild(input5);

let div6 = document.createElement("div");
div6.setAttribute("class","formulario-fila");
form.appendChild(div6);

let label6 = document.createElement("label");
label6.setAttribute("for","dni");
label6.textContent = "DNI";
div6.appendChild(label6);

let input6 = document.createElement("input");
input6.setAttribute("type","text");
input6.setAttribute("name","dni");
input6.setAttribute("id","dnif");
div6.appendChild(input6);

let div7 = document.createElement("div");
div7.setAttribute("class","formulario-fila");
form.appendChild(div7);

let label7 = document.createElement("label");
label7.setAttribute("for","fecha");
label7.textContent = "Fecha";
div7.appendChild(label7);

let input7 = document.createElement("input");
input7.setAttribute("type","text");
input7.setAttribute("name","fecha");
input7.setAttribute("id","fechaf");
div7.appendChild(input7);

let div8 = document.createElement("div");
div8.setAttribute("class","formulario-fila");
form.appendChild(div8);

let button = document.createElement("button");
button.setAttribute("id","formulario-enviar");
button.textContent = "Añadir";
div8.appendChild(button);




//element.setAttribute(attr, value)
//miElemento.serAttribite("class","nuevaClase")

