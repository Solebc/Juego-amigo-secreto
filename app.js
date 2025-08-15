// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Funcion para agregar amigos
function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value;
    //console.log(nombreAmigo); //Ver que se está obteniendo el valor del campo de entrada (opcional)
    
    //Validar que nombre no sea vacío
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    //Validar que sea un nombre válido
    let regex = /^[[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/; // Permite letras y espacios
    if (!regex.test(nombreAmigo)) {
        alert("Por favor, inserte un nombre válido (solo letras y espacios).");
        return;
    }

    //Validar que el nombre no esté repetido
    if (amigos.some(nombre => nombre.toLowerCase() === nombreAmigo.toLowerCase())) {
        alert("Este nombre ya está en la lista de amigos.");
        return;
    }

    //Agrega el nombre a la lista de amigos
    amigos.push(nombreAmigo);
    //console.log(amigos); //Ver que se está agregando el nombre a la lista (opcional)

    //Actualiza la lista visualmente
    mostrarAmigos(); 

    //Limpia el campo de entrada
    document.getElementById("amigo").value = "";
}

//Funcion que muestra la lista de amigos
function mostrarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpia la lista antes de mostrar los amigos

    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Funcion para sortear amigo a azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, agregue al menos un amigo para sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;
}