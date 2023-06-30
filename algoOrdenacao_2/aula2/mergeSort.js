const listaLivros = require("./array");

function mergeSort(array) {
    if (array.length > 1) {
        const middle = Math.floor(array.length / 2);
        const left = mergeSort(array.slice(0, middle));
        const right = mergeSort(array.slice(middle, array.length));
        array = merge(left, right)
    }
    return array;
};

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        let currentLeftElement = left[leftIndex];
        let currentRightElement = right[rightIndex];

        //atencao se for um valor/chave de um objeto, deve-se usar currentLeftElement.value/key
        if (currentLeftElement.titulo < currentRightElement.titulo) {
            result.push(currentLeftElement);
            leftIndex++;
        } else {
            result.push(currentRightElement);
            rightIndex++;
        }
    }

    return result.concat(leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex));
};

const livrosEmOrdemAlfabetica = mergeSort(listaLivros)

while (true) {
    console.log(`Nós possuímos no momento ${livrosEmOrdemAlfabetica.length} títulos de livros, sobre: `)
    livrosEmOrdemAlfabetica.forEach(function(element) {
        console.log(element.titulo, `no valor de R$ ${element.preco},00.`)
    }) 
    break;
}



/*
function mergeSort(array, compareFunction) {
    if (array.length <= 1) {
        return array;
    }

    if (!compareFunction) {
        compareFunction = (a, b) => a < b;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left, compareFunction), mergeSort(right, compareFunction), compareFunction);
};

function merge(left, right, compareFunction) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (compareFunction(left[leftIndex], right[rightIndex])) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(leftIndex < left.length ? left.slice(leftIndex) : right.slice(rightIndex));
};

function compareFunction (leftAnalysis, rightAnalysis) {
    return leftAnalysis.preco < rightAnalysis.preco;
}

console.log(mergeSort(listaLivros, compareFunction))
*/