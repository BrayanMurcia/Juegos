let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
    let botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota")
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")

    let mascotaJugador = document.getElementById("mascota-jugador")

    if (inputHipodoge.checked) {
        mascotaJugador.innerHTML = "Hipodoge"
    } else if (inputCapipepo.checked) {
        mascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        mascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        mascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        mascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        mascotaJugador.innerHTML = "Pydos"
    } else {
        alert("Selecciona una mascota")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleatorio = aleatorio(1, 6)
    let mascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatorio == 1) {
        mascotaEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        mascotaEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3) {
        mascotaEnemigo.innerHTML = "Ratigueya"
    } else if (mascotaAleatorio == 4) {
        mascotaEnemigo.innerHTML = "Langostelvis"
    } else if (mascotaAleatorio == 5) {
        mascotaEnemigo.innerHTML = "Tucapalma"
    } else {
        mascotaEnemigo.innerHTML = "Pydos"
    }
}

function ataqueFuego() {
    ataqueJugador = "Fuego 🔥"
    ataqueAleatorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = "Agua 💧"
    ataqueAleatorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = "Tierra 🌱"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "Fuego 🔥"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "Agua 💧"
    } else {
        ataqueEnemigo = "Tierra 🌱"
    }

    combate()
}

function combate() {
    if (ataqueJugador == ataqueEnemigo) {
        crearMensaje("¡EMPATE!")
    } else if (ataqueJugador == "Fuego 🔥" && ataqueEnemigo == "Tierra 🌱") {
        crearMensaje("¡GANASTE!")
    } else if (ataqueJugador == "Agua 💧" && ataqueEnemigo == "Fuego 🔥") {
        crearMensaje("¡GANASTE!")
    } else if (ataqueJugador == "Tierra 🌱" && ataqueEnemigo == "Agua 💧") {
        crearMensaje("¡GANASTE!")
    } else {
        crearMensaje("¡PERDISTE!")
    }
}

function crearMensaje(resultadoBatalla) {
    let sectionMensajes = document.getElementById("mensajes")

    let parrafo = document.createElement("p")
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + " y la mascota del enemigo atacó con " + ataqueEnemigo + " - " + resultadoBatalla

        sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

window.addEventListener("load", iniciarJuego)
