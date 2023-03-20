var moveButton = document.querySelector(".errado");
var botaoCerto = document.querySelector(".certo");
var botaoVoltar = document.querySelector(".voltar");

var telaUm = document.querySelector(".container-principal");
var telaDois = document.querySelector(".container-segundario");

var clicou = 0

moveButton.addEventListener("click", function () {
var vertical = Math.floor(Math.random() * 300);
var horizontal = Math.floor(Math.random() * 300);
moveButton.style.position = "absolute";
moveButton.style.right = vertical + "px";
moveButton.style.top = horizontal + "px";


});

botaoCerto.addEventListener("click", function() {
    telaUm.style.display = "none";
    telaDois.style.display = "block"
})

botaoVoltar.addEventListener("click", function() {
    telaUm.style.display = "flex";
    telaDois.style.display = "none";
})