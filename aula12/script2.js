const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const btnCadastrar = document.getElementById("botao");
const res = document.getElementById("res");

btnCadastrar.addEventListener("click", () => {
    if (nome.value == "admin" && senha.value == "admin") {
        res.innerHTML = `Bem vindo admin`;
        res.style.color = "green";
    } else {
        res.innerHTML = "Acesso negado, tente novamente!";
        res.style.color = "red";
    }
    nome.value = null;
    senha.value = null;
});
