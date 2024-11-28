const formDescription = {
    tag: 'div',
    attributes:{
        class: "formulario-contenido",
        id: 'formulario-contenido-div',
    },
    content: [
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila",
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: "nombre"
                    },
                    textContent: 'Nombre'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: "text",
                        id: "nombre",
                        name: "nombre"
                    },
                },
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila",
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: "apellido"
                    },
                    textContent: 'Apellido'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: "text",
                        id: "apellido",
                        name: "apellido"
                    },
                },
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila",
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: "nacimiento"
                    },
                    textContent: 'Nacimiento'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: "text",
                        id: "nacimiento",
                        name: "nacimiento"
                    },
                },
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila",
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: "sueldo"
                    },
                    textContent: 'Sueldo'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: "number",
                        id: "sueldo",
                        name: "sueldo"
                    },
                },
            ]
        },
        {tag: 'div', attributes:{class: 'formulario-fila'}},
        {
            tag: 'div',
            attributes:{class:"formulario-fila"},
            content:[
                {
                    tag: 'button',
                    attributes: {id: 'formulario-enviar'},
                    textContent: 'Añadir'
                }
                
            ]
        }
    ]
        
}

function renderDOMElement(descripcionElemento) {
    let elemento = document.createElement(descripcionElemento.tag);
    //atributos
    let listaAtributos = descripcionElemento.attributes;
    for(let attr in listaAtributos){
        elemento.setAttribute(attr, listaAtributos[attr]);
    }
    //content
    //si descripcionElemento.content es falso, le da a descripcionContenido el valor []
    let descripcionContenido = descripcionElemento.content || [];
    for(let elementoHijo of descripcionContenido){
        let hijo = renderDOMElement(elementoHijo);
        elemento.appendChild(hijo);
    }
    //textContent
    if(descripcionElemento.textContent){
        elemento.textContent = descripcionElemento.textContent;
    }

    return elemento;

}

function renderForm() {
    let form = document.getElementById('formulario');
}

function factorial(n) {
    if(n === 1){
        return 1;
    }else{
        return n*factorial(n-1);
    }
}