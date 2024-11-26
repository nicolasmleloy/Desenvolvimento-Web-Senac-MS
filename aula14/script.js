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
    setTimeout(() => {
        formControl.className = "form-control";
    }, 3000);
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control sucesso";
}

function checkRequire(listaInput) {
    let deuBom = true;
    listaInput.forEach((input) => {
        if (input.value == "") {
            showError(input, "Campo obrigatório");
            deuBom = false;
        } else {
            showSuccess(input);
        }
    });

    return deuBom;
}

function checkLength(input, min, max) {
    let deuBom = true;

    if (input.value.length < min) {
        showError(input, `Quantidade mínima é ${min}`);
        deuBom = false;
    } else if (input.value.length > max) {
        showError(input, `Quantidade máxima é ${max}`);
        deuBom = false;
    } else {
        showSuccess(input);
    }

    return deuBom;
}

function checkPassword(input1, input2) {
    let deuBom = true;
    if (input1.value != input2.value) {
        showError(input2, "As senhas não são iguais!");
        deuBom = false;
    } else {
        showSuccess(input1);
        showSuccess(input2);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    var deuBom = true;
    deuBom = checkRequire([username, email, password, password2]);
    deuBom = checkLength(username, 3, 10) && deuBom;
    deuBom = checkLength(password, 5, 8) && deuBom;
    deuBom = checkPassword(password, password2) && deuBom;

    if (deuBom) {
        window.location.href = "./pages/home.html";
    }
});
