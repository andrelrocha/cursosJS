function fatorial(n) {
    // Verifica se a base da recursão foi atingida (n = 0)
    if (n === 0) {
      return 1;
    }
  
    // Chama a função recursivamente, decrementando o valor de n (novo parâmetro n será n-1 até que seja 0 e encerre a recursão)
    return n * fatorial(n - 1);
  }

console.log(fatorial(13));