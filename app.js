// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Creación del Array
nombresAmigos = [];

//Creación de la función para agregar amigos.
function agregarAmigo() {
    var input = document.getElementById('amigo'); 
    var nombre = input.value.trim(); 

    if (nombre === '') { 
        alert ("Por favor, inserte un nombre");
    } else {
        nombresAmigos.push(nombre)
        console.log('Nombre agregado:', nombre);
        input.value = '';
        listaAmigos();
}
}

//Creación de la función para actualizar la lista de amigos.

function listaAmigos() {
    var lista = document.getElementById ('listaAmigos');
    lista.innerHTML = "";

    for (var i = 0; i < listaAmigos.length; i++) {
        var li = document.createElement ("li")
        li.textContent = nombresAmigos[i];
        lista.appendChild(li);
    }
 }

 //Creación de la función para sortear los amigos.
function sortearAmigo() {
    if (nombresAmigos.length === 0) {
        alert("No hay amigos en la lista para seleccionar.");
        return;
        }

    var indiceAleatorio = Math.floor(Math.random() * nombresAmigos.length);
    var amigoSeleccionado = nombresAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = "Amigo seleccionado: " + amigoSeleccionado;
    }