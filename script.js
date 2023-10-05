var element = document.getElementById("cambia");

//TAL VEZ SEA NECESARIO AGREGAR THIS//
//Funcion que ensena que pasa al pasar el mause arriba de algo//

function ensima(button) { //ESTAS ENSIMA DEL BOTON


    element.innerHTML = "BIEN, ESTAS ARRIBA DEL BOTON :D" //se muesta el texto al estar ensima
    element.classList.add("estas-arriba-yei"); //se le asigna una clase al estar ensima

    button.querySelector("h3").innerHTML = "Estas arriba" //CAMBIA EN DONDE ESTA EL MAUSE
    
    button.classList.add("estas-arriba"); // CAMBIA EN DONDE ESTA EL MAUSE

}
function fuera(button) {
    element.innerHTML = "MAL, NO ESTAS ARRIBA DEL BOTON >:c" //se cambia el texto al salir
    element.classList.remove("estas-arriba-yei"); //se elimina la clase al salir

    button.querySelector("h3").innerHTML = "PASA POR ARRIBA"; 

    button.classList.remove("estas-arriba");

}

//CONTADOR FACIL//

var sum = 0

function aumentarlikes() { //Funcion que suma likes
    sum++; //Le va sumando 1
    contador.innerHTML = sum //Muestra la suma en el HTLM
}
function disminuirlikes() {
    sum--;
    contador.innerHTML = sum
}

var likes = 0;
var suma = 0;
var dislikes = 0;

function aumentarlikess() { // Función que suma likes
    suma++;
    likes++;
    // Actualiza los elementos HTML
    document.getElementById("contadorr").innerHTML = suma;
    document.getElementById("contador-likes").innerHTML = likes;
}

function disminuirlikess() { // Función que suma dislikes
    suma--;
    dislikes++;
    // Actualiza los elementos HTML
    document.getElementById("contadorr").innerHTML = suma;
    document.getElementById("contador-dislikes").innerHTML = dislikes;
}



//TEMPORIZADOR//
var espera = document.getElementById("wait")

function cambio() {
    espera.innerHTML = "Espera por favor :D"
    espera.classList.add("gracias")


    setTimeout(() => { //Funcion del temporizador
        espera.innerHTML = "Gracias por esperar <3"
        espera.classList.remove("gracias");
    }, 2000); //Espera 2 segundos
}