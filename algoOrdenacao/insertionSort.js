const livros = require("./listaLivros");

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let atual = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j].titulo > atual.titulo) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = atual;
    }
    return arr;
};

const organizados = insertionSort(livros)

console.log(organizados)