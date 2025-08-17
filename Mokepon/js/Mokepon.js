const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque")
const botonReiniciarJuego = document.getElementById("boton-reiniciar")
const botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonTierra = document.getElementById("boton-tierra")
const botonReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota")
const inputHipodoge = document.getElementById("hipodoge")
const inputCapipepo = document.getElementById("capipepo")
const inputRatigueya = document.getElementById("ratigueya")
const inputLangostelvis = document.getElementById("langostelvis")
const inputTucapalma = document.getElementById("tucapalma")
const inputPydos = document.getElementById("pydos")
const mascotaJugador = document.getElementById("mascota-jugador")

const mascotaEnemigo = document.getElementById("mascota-enemigo")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

class Mokepon {
    constructor(nombre, foto, vida) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
    }
}

let hipodoge = new Mokepon("Hipodoge", "./assets/Hipodoge.jpg", 3)
let capipepo = new Mokepon("Capipepo", "./assets/Capipepo.jpg", 3)
let ratigueya = new Mokepon("Ratigueya", "./assets/Ratigueya.jpg", 3)
let langostelvis = new Mokepon("Langostelvis", "./assets/Langostelvis.png", 3)
let tucapalma = new Mokepon("Tucapalma", "./assets/Tucapalma.png", 3)
let pydos = new Mokepon("Pydos", "./assets/Pydos.jpg", 3)

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = "none"
    botonReiniciarJuego.style.display = "none"

    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador)

    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonTierra.addEventListener("click", ataqueTierra)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"

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
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Agua 💧" && ataqueEnemigo == "Fuego 🔥") {
        crearMensaje("¡GANASTE!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == "Tierra 🌱" && ataqueEnemigo == "Agua 💧") {
        crearMensaje("¡GANASTE!")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("¡PERDISTE!")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }

    revisarVidas()
}

function revisarVidas() {
    if (vidasEnemigo == 0) {
        crearMensajeFinal("FELICITACIONES, !GANASTE EL JUEGO!")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("¡LO SIENTO, HAS PERDIDO EL JUEGO!")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueDelJugador = document.createElement("p")
    let nuevoAtaqueDelEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true
    botonReiniciar.style.display = "block"
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);

}

window.addEventListener("load", iniciarJuego)
