//selection sort em uma array
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

const precosLivros = [25, 15, 30, 50, 45, 20];

arrayNova = selectionSort(precosLivros);

console.log(arrayNova)



//selection sort em valores de uma lista de objetos
const livros = require("./listaLivros");

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j].preco < arr[minIndex].preco) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
};

const organizado = selectionSort(livros)

console.log(`O livro mais barato custa ${organizado[0].preco} reais`);

let indexMaisCaro = (livros.length)-1
console.log(`Já o mais caro é o livro sobre ${organizado[indexMaisCaro].titulo}, no valor de ${organizado[indexMaisCaro].preco} reais`)