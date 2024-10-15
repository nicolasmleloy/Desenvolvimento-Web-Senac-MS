function somaDosPares(array) {
    let resultado = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            resultado += array[i];
        }
    }
    return resultado;
}

const arrayExemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = somaDosPares(arrayExemplo);
console.log(result);
