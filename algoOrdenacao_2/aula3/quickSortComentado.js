// Função principal do algoritmo Quick Sort
function quickSort(array, esquerda, direita) {
    // Verifica se o tamanho do array é maior que 1
    if (array.length > 1) {
        // Obtém o índice atual do pivô ao particionar o array
        let indiceAtual = particiona(array, esquerda, direita);
        // Verifica se há elementos a esquerda do pivô que precisam ser ordenados
        if (esquerda < indiceAtual-1) {
            quickSort(array, esquerda, indiceAtual-1);
        }
        // Verifica se há elementos a direita do pivô que precisam ser ordenados
        if (indiceAtual < direita) {
            quickSort(array, indiceAtual, direita);
        }
    }
    // Retorna o array ordenado
    return array;
}

// Função que particiona o array para o Quick Sort
function particiona(array, esquerda, direita) {
    // Define o pivô como o elemento do meio do array
    let pivo = array[Math.floor((esquerda + direita) / 2)];
    // Define os índices da esquerda e da direita
    let atualEsquerda = esquerda;
    let atualDireita = direita;

    // Loop que realiza a ordenação
    while (atualEsquerda <= atualDireita) {
        // Encontra um elemento na esquerda que é maior que o pivô
        while (array[atualEsquerda].preco < pivo.preco) {
            atualEsquerda++;
        }
        // Encontra um elemento na direita que é menor que o pivô
        while (array[atualDireita].preco > pivo.preco) {
            atualDireita--;
        }

        // Troca os elementos de lugar se ainda há elementos para serem comparados
        if (atualEsquerda <= atualDireita) {
            trocaLugar(array, atualEsquerda, atualDireita);
            atualEsquerda++;
            atualDireita--;
        }
    }
    // Retorna o índice atual do pivô
    return atualEsquerda;
}