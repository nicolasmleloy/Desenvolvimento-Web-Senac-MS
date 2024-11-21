const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

function showError(input, mensagem) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerHTML = mensagem;
}

function checkRequire(listaInput) {
    listaInput.forEach((input) => {
        if (input.value == "") {
            showError(input, "Campo obrigatório");
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequire([username, email, password, password2]);
});
