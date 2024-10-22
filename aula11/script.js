let botao = document.getElementById("boto");
let body = document.getElementsByTagName("body");
let texto = document.createElement("h1");

body[0].id = "estiloBody";

botao.addEventListener("click", function () {
    texto.innerHTML = "Olá, mensagem apareceu!!!";
    body[0].appendChild(texto);
    body[0].id = "mudarBody";

    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = "Clique para remover";
    btnRemover.className = "estiloRemover";
    body[0].appendChild(btnRemover);
    btnRemover.addEventListener("click", function () {
        texto.remove();
        btnRemover.remove();
        botao.disabled = false;
        body[0].id = "estiloBody";
    });

    botao.disabled = true;
});
