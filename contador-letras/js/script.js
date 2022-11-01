import LetterCounter from "./contadorDeLetras.js";

const button = document.querySelector("#btn-contar");

button.addEventListener("click", () => {
  const text = document.querySelector("#texto").value;
  const contarLetras = new LetterCounter(text);
  const resultado = document.querySelector("#res");

  resultado.innerHTML = contarLetras.lettercount;
});
