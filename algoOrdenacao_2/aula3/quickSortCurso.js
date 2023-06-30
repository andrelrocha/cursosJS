const listaLivros = require("../aula2/array");
const trocaLugar = require("./encontraMenores");

function quickSort(array, esquerda, direita) {
    if (array.length > 1) {
        let indiceAtual = particiona(array, esquerda, direita);
        if (esquerda < indiceAtual-1) {
            quickSort(array, esquerda, indiceAtual-1);
        }
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    return array;
}

function particiona(array, esquerda, direita) {
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    while (atualEsquerda <= atualDireita) {
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1))

/*
const listaLivros = require("../aula2/array");

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for (let atual = 0; atual < arr.length-1; atual++) {
        if (arr[atual].preco < pivot.preco) {
        left.push(arr[atual]);
        } else if (arr[atual] == pivot) {        
            continue
        } else {
        right.push(arr[atual]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(listaLivros)); 
*/