const qtdCliques = document.getElementById("qtd-cliques");
const botao = document.getElementById("botao");
const resetar = document.getElementById("resetar");

var valor = 0;
qtdCliques.innerHTML = valor;
botao.addEventListener("click", () => {
    valor += 1;
    qtdCliques.innerHTML = valor;
    resetar.addEventListener("click", () => {
        valor = 0;
        qtdCliques.innerHTML = valor;
    });
});
