let dataNasc = new Date("2005-08-17");
let dataAtual = new Date();
let idade = dataAtual.getFullYear() - dataNasc.getFullYear();

if (dataAtual.getMonth() < dataNasc.getMonth()) {
    idade -= 1;
} else if (dataAtual.getMonth() == dataNasc.getMonth()) {
    if (dataAtual.getDate() < dataNasc.getDate()) {
        idade -= 1;
    }
}

console.log(`Idade do usuário: ${idade} anos.`);
