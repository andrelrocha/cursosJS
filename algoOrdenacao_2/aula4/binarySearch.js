const listaLivros = require("./arrayOrdenado");

//left and right are indexes
function binarySearch(array, target, left, right) {

    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        const current = array[middle];

        if (current.preco === target) {
            return middle;
        } else if (current.preco < target) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
}


function binarySearchRecursive(array, target, left, right) {
    if (left > right) return -1;
    
    const middle = Math.floor((left + right) / 2);
    const current = array[middle];

    if (current.preco === target) {
        return middle;
    } else if (current.preco < target) {
        return binarySearchRecursive(array, target, middle + 1, right);
    } else {
        return binarySearchRecursive(array, target, left, middle - 1);
    }
}

const buscaIterando = binarySearch(listaLivros, 40, 0, (listaLivros.length-1))
console.log(`O livro de valor R$ 40,00 possui index ${buscaIterando} na lista passada, sendo um livro sobre a linguagem ${listaLivros[buscaIterando].titulo}.`)

const buscaRecursiva = binarySearchRecursive(listaLivros, 20, 0, (listaLivros.length-1))
console.log(`O livro de valor R$ 20,00 possui index ${buscaRecursiva} na lista passada, sendo um livro sobre a linguagem ${listaLivros[buscaRecursiva].titulo}.`)



//In terms of time complexity, both iterative and recursive implementations of binary search have the 
//same average and worst-case time complexity of O(log n), where n is the number of elements in the array.

//In terms of memory usage, the iterative implementation is generally more efficient than the recursive implementation. 
//In a recursive implementation, each function call creates a new stack frame in memory, which can consume a lot of memory if the array is large.

//The array passed to a binary search function must be sorted in ascending order. 
//This is because binary search works by repeatedly dividing the search interval in half based on the value at the middle index.