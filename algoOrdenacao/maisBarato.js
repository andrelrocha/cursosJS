const livros = require("./listaLivros");

let maisBarato = 0;

for (let atual = 0; atual < livros.length; atual ++) {
    if (livros[atual].preco < livros[maisBarato].preco) {
        maisBarato = atual
    }
};

console.log(`O livro mais barato custa ${livros[maisBarato].preco} reais, sobre ${livros[maisBarato].titulo}.`);

/*
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
*/