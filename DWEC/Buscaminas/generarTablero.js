"use-strict"
//document.getElementById("formulario-enviar").addEventListener("click", tablero);
document.getElementById("a").addEventListener("click", inicio);

var llamadas = 0;

function inicio() {

    let table = document.getElementById("tablero-contenedor");
    table.innerHTML = "";
    
    let minas=document.getElementById("minas").value;

    let lado=document.getElementById("casillas").value;
    let casillas=lado*lado;
    let arrayTablero = generarBombas(casillas,minas);
    let cont = 0;

    document.getElementById("filas").setAttribute("class",`${lado}`);
    document.getElementById("faltan").setAttribute("class",`${casillas-minas}`);
    document.getElementById("fin").setAttribute("class","false");

    for (let index = 0; index < lado; index++) {
        let tr = document.createElement("tr");
        for (let index2 = 0; index2 < lado; index2++) {
            let td = document.createElement("td");
            td.setAttribute("id",`${cont}`);
            if(arrayTablero[cont]=='B'){
                td.setAttribute("class","bomba");
            }else{
                td.setAttribute("class","vacio");
            }
            tr.appendChild(td);
            cont++;
        }
        table.appendChild(tr);
    }
    for (let index = 0; index < casillas; index++) {
        if(document.getElementById(`${index}`).getAttribute("class")=="bomba"){
            document.getElementById(`${index}`).addEventListener("click", explota);
        }else{
            document.getElementById(`${index}`).addEventListener("click", correcto);
        }
        document.getElementById(`${index}`).addEventListener("contextmenu", (e) => {e.preventDefault()});
        document.getElementById(`${index}`).addEventListener("contextmenu", banderita); 
        
    }
}


function generarBombas(casillas, minas) {
    if(minas>casillas){
        minas = casillas;
    }
    let array = [];
    for (let index = 0; index < casillas; index++) {
        array.push('V');
    }
    for (let index = 0; index < minas; index++) {
        let num = parseInt(Math.random()*casillas);   
        if(array[num] == 'V'){
            array[num] = 'B';
        }else{
            index--;
        }
        
    }
    return array;
}

function explota(){
    if(document.getElementById("fin").getAttribute("class")=="false"){
        let listaBombas = document.querySelectorAll("td.bomba");

        listaBombas.forEach(bomba => {
            bomba.setAttribute("class","bum");
            bomba.innerHTML = "X";
        });

        alert("Clicaste una bomba");
        alert("Fin del juego");
        document.getElementById("fin").setAttribute("class","true");
    }
    
}

function victoria() {
    let listaBombas = document.querySelectorAll("td.bomba");

    listaBombas.forEach(bomba => {
        bomba.setAttribute("class","desactivada");
        bomba.innerHTML = "X";
    });
    alert("Ganaste");
    alert("Fin del juego");
    document.getElementById("fin").setAttribute("class","true");
}

function banderita() {
    if(document.getElementById("fin").getAttribute("class")=="false"){
        if(event.target.innerHTML==""){
            event.target.innerHTML="P";        
        }else{
            if(event.target.innerHTML=="P") {
                event.target.innerHTML="";
            }
        }
    }
}

function correcto(){
    if(event.target.getAttribute("class","vacio")=="vacio" && document.getElementById("fin").getAttribute("class")=="false"){
        let faltan = document.getElementById("faltan").getAttribute("class");
        faltan=faltan-1;
        
            document.getElementById("faltan").setAttribute("class",`${faltan}`);
            event.target.setAttribute("class","activado");
            let numero = comprobacionBombas(event.target.getAttribute("id"));
            let id = parseInt(event.target.getAttribute("id"));
            let fila=parseInt(document.getElementById("filas").getAttribute("class"));
            if(numero==0){
                event.target.innerHTML=="";
                if(id%fila!=0){             //atras
                    if(document.getElementById(id-1).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id-1).click();
                    }
                }
                if(id%fila!=0 && id-fila>=0){//atras arriba
                    if(document.getElementById(id-fila-1).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id-fila-1).click();
                    }
                }
                if(id%fila!=0 && id+fila<=(fila*fila)){//atras abajo  
                    if(document.getElementById(id+fila-1).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id+fila-1).click();
                    }         
                }
                if((id+1)%fila!=0){         //delante
                    if(document.getElementById(id+1).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id+1).click();
                    }
                }
                if((id+1)%fila!=0 && id-fila>=0){//delante arriba
                    if(document.getElementById(id-fila+1).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id-fila+1).click();
                    }
                }
                if((id+1)%fila!=0 && id+fila<=(fila*fila)){//delante abajo
                    if(document.getElementById(id+fila+1).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id+fila+1).click();
                    }
                }
                if(id+fila<(fila*fila)){    //debajo
                    if(document.getElementById(id+fila).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id+fila).click();
                    }
                }
                if(id-fila>=0){             //arriba
                    if(document.getElementById(id-fila).getAttribute("class")=="vacio"){
                        llamadas++;
                        console.log(llamadas);
                        document.getElementById(id-fila).click();
                    }
                    
                }
                
            }else{
                event.target.innerHTML=numero;
            }
            
        if(faltan==0){
            victoria();
        }
    }
}

function comprobacionBombas(casilla) {
    let fila = parseInt(document.getElementById("filas").getAttribute("class"));
    let cont = 0;
    let posicion = parseInt(casilla);
    //borde izquierdo
    if(posicion%fila!=0){
        if(document.getElementById(posicion-1).getAttribute("class")=="bomba"){
            cont++;
        }
    }
    //borde izquierdo
    if((posicion+1)%fila!=0){
        if(document.getElementById(posicion+1).getAttribute("class")=="bomba"){
            cont++;
        }
    }
    //primera fila
    if(posicion-fila>=0){
        if(posicion%fila!=0 && document.getElementById(posicion-fila-1).getAttribute("class")=="bomba"){
            cont++;
        }
        if(document.getElementById(posicion-fila).getAttribute("class")=="bomba"){
            cont++;
        }
        if((posicion+1)%fila!=0 && document.getElementById(posicion-fila+1).getAttribute("class")=="bomba"){
            cont++;
        }
    }
    //última fila
    if(posicion+fila<(fila*fila)){
        if(posicion%fila!=0 && document.getElementById(posicion+fila-1).getAttribute("class")=="bomba"){
            cont++;
        }
        if(document.getElementById(posicion+fila).getAttribute("class")=="bomba"){
            cont++;
        }
        if((posicion+1)%fila!=0 && document.getElementById(posicion+fila+1).getAttribute("class")=="bomba"){
            cont++;
        }
    }

    return cont;
}

