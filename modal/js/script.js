const btn = document.querySelector("#botao");

function abrirModal() {
  const modal = document.querySelector("#modal");

  modal.classList.toggle("abrirModal");
}

btn.addEventListener("click", abrirModal);
