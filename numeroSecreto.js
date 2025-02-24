// Generar el número secreto aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = []; // Lista para almacenar los intentos

// Función para solicitar un número válido al usuario
function solicitarNumero() {
  let numero;

  while (true) {
    let entrada = prompt("Ingresa un número del 1 al 100:");
    numero = parseInt(entrada);

    if (!isNaN(numero) && numero >= 1 && numero <= 100) {
      break; // El número es válido
    } else {
      alert("Error: Debes ingresar un número válido entre 1 y 100.");
    }
  }

  return numero;
}

// Función principal del juego
function jugar() {
  let adivinado = false;

  while (!adivinado) {
    let intento = solicitarNumero();
    intentos.push(intento);

    if (intento === numeroSecreto) {
      console.log("🎉 ¡Felicidades, adivinaste el número secreto!");
      document.getElementById("mensaje").innerText = "🎉 ¡Felicidades, adivinaste el número secreto!";
      console.log("Intentos previos: ", intentos.join(", "));
      document.getElementById("intentos").innerText = `Intentos: ${intentos.join(", ")}`;
      adivinado = true;
    } else {
      console.log("Ups, el número secreto es incorrecto, vuelve a intentarlo.");
      document.getElementById("mensaje").innerText = "Ups, el número secreto es incorrecto, vuelve a intentarlo.";
    }
  }
}

// Ejecutar el juego
jugar();
