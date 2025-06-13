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

    if (inputHipodoge.checked) {
        alert("Has seleccionado a Hipodoge")
    } else if (inputCapipepo.checked) {
        alert("Has seleccionado a Capipepo")
    } else if (inputRatigueya.checked) {
        alert("Has seleccionado a Ratigueya")
    } else if (inputLangostelvis.checked) {
        alert("Has seleccionado a Langostelvis")
    } else if (inputTucapalma.checked) {
        alert("Has seleccionado a Tucapalma")
    } else if (inputPydos.checked) {
        alert("Has seleccionado a Pydos")
    } else {
        alert("Selecciona una mascota")
    }
}

window.addEventListener("load", iniciarJuego)
