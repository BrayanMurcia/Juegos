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
}

window.addEventListener("load", iniciarJuego)
