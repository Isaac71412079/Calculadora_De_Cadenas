import { sumarCadena } from "./calculadorDeCadenas.js";

const cadenaInput = document.querySelector("#cadena");
const delimitadoresInput = document.querySelector("#delimitadores");
const form = document.querySelector("#calcular-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let cadena = cadenaInput.value;
  const delimitadores = delimitadoresInput.value;

  if (delimitadores) {
    cadena = delimitadores + " " + cadena;
  }

  const resultado = sumarCadena(cadena);
  div.innerHTML = `<p>${resultado}</p>`;
});
