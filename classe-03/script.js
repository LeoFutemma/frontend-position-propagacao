const fotos = document.querySelectorAll(".fotos img");
const imagemModal = document.querySelector(".modal img");
const linkModal = document.querySelector(".modal a");
const modal = document.querySelector(".modal");

function abrirModal(src) {
  imagemModal.src = src;
  modal.style.display = "flex";
  linkModal.href = src;
}

fotos.forEach((imagem) => {
  imagem.addEventListener("click", (event) => {
    abrirModal(event.target.src);
  })
})

modal.addEventListener("click", () => {
  modal.style.display = "none";
})

linkModal.addEventListener("click", (event) => {
  event.stopPropagation();
})