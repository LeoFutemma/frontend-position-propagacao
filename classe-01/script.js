const exibirSenha = document.querySelector(".input-password");
const iconeOlho = document.querySelector(".btn-olho");

iconeOlho.addEventListener("click", abrirOlho);

function abrirOlho(event) {
  const botaoClicado = event.target;
  botaoClicado.src = "../classe-01/assets/olho-aberto.svg"
  exibirSenha.type = "text";
  botaoClicado.addEventListener("click", fecharOlho);
}

function fecharOlho(event) {
  const botaoClicado = event.target;
  botaoClicado.src = "../classe-01/assets/olho-fechado.svg"
  exibirSenha.type = "password";

  botaoClicado.removeEventListener("click", fecharOlho);
}