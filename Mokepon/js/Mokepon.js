function iniciarJuego() {
    let botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota");
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
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
    let ataqueAleatorio = aleatorio(1, 6)
    let mascotaEnemigo = document.getElementById("mascota-enemigo")

    if (ataqueAleatorio == 1) {
        mascotaEnemigo.innerHTML = "Hipodoge"
    } else if (ataqueAleatorio == 2) {
        mascotaEnemigo.innerHTML = "Capipepo"
    } else if (ataqueAleatorio == 3) {
        mascotaEnemigo.innerHTML = "Ratigueya"
    } else if (ataqueAleatorio == 4) {
        mascotaEnemigo.innerHTML = "Langostelvis"
    } else if (ataqueAleatorio == 5) {
        mascotaEnemigo.innerHTML = "Tucapalma"
    } else if (ataqueAleatorio == 6) {
        mascotaEnemigo.innerHTML = "Pydos"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
    
}

window.addEventListener("load", iniciarJuego)
