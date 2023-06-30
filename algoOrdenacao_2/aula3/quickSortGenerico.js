const listaAutores = require("./testeFile");

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for (let atual = 0; atual < arr.length-1; atual++) {
        if (arr[atual] < pivot) {
        left.push(arr[atual]);
        } else if (arr[atual] == pivot) {        
            continue
        } else {
        right.push(arr[atual]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(listaAutores));