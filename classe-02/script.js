const botao = document.querySelector(".btn");
const modal = document.querySelector(".faq");

botao.addEventListener("click", () => {
  modal.classList.toggle("show");
})