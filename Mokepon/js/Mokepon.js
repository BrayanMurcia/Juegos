function iniciarJuego() {
    let botonSeleccionarMascota = document.getElementById("boton-seleccionar-mascota");
    botonSeleccionarMascota.addEventListener("click", seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    alert("¡Has seleccionado tu mascota!");
}

window.addEventListener("load", iniciarJuego)
