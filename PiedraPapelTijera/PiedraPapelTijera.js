function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "Piedra 🪨";
  } else if (jugada == 2) {
    resultado = "Papel 📃";
  } else if (jugada == 3) {
    resultado = "Tijera ✂️";
  } else {
    resultado = "Elección inválida";
  }
  return resultado;
}

let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0;

alert(
  "¡Bienvenido al juego de Piedra, Papel o Tijera!\n" +
    "Gana el primero en alcanzar 3 triunfos o 3 derrotas."
);

while (triunfos < 3 && perdidas < 3) {
  pc = aleatorio(1, 3);
  jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");

  alert("Tú elegiste: " + eleccion(jugador));
  alert("PC eligió: " + eleccion(pc));

  // COMBATE
  if (pc == jugador) {
    alert("EMPATE");
    empates++;
  } else if (jugador == 1 && pc == 3) {
    alert("GANASTE");
    triunfos++;
  } else if (jugador == 2 && pc == 1) {
    alert("GANASTE");
    triunfos++;
  } else if (jugador == 3 && pc == 2) {
    alert("GANASTE");
    triunfos++;
  } else {
    alert("PERDISTE");
    perdidas++;
  }
}

alert(
  "Resultados finales:\n" +
    "Triunfos: " +
    triunfos +
    "\n" +
    "Derrotas: " +
    perdidas +
    "\n" +
    "Empates: " +
    empates
);

if (triunfos == 3) {
  alert("¡Felicidades! Has ganado el juego.");
} else if (perdidas == 3) {
  alert("Lo siento, has perdido el juego.");
}
