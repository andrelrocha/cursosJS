let livros = ["JavaScript", "PHP", "Java", "Elixir", "Go", "Python"]; 

console.log(livros.sort())



const livrosObj = {
    JavaScript: "R$ 25,00",
    Python: "R$ 20,00",
    PHP: "R$ 15,00",
    Elixir: "R$ 50,00",
    Go: "R$ 45,00",
    Java: "R$ 30,00"
};

function ordemSort(a,b) {
    if(a.valor < b.valor) return -1;
    if(a.valor > b.valor) return 1;
    return 0;
}
// A função ordemSort é usada para comparar dois valores (a e b) e retornar um valor que indique a ordem deles.
// A propriedade '.valor' é usada para comparar o valor de cada elemento no objeto livrosArray, ao invés de comparar as chaves (que seriam os nomes dos livros).
// Portanto, a comparação na função ordemSort é feita usando a propriedade '.valor' para determinar a ordem correta dos valores dos livros (preços).

//transformar cada item do livrosObj em um objeto, com as propriedades "chave" e "valor" correspondendo ao item original
const livrosArray = Object.entries(livrosObj).map(([chave, valor]) => ({chave, valor}));

const livrosOrdem = livrosArray.sort(ordemSort);

const livrosOrdenados = {};

//a cada iteração um objeto é criado com a propriedade "chave" e "valor" que são atribuídos a partir da desestruturação da variável (valor)
//Em seguida, esse objeto é adicionado como valor ao objeto livrosOrdenados com uma chave específica (chave).
livrosOrdem.forEach(({chave, valor}) => {
    livrosOrdenados[chave] = valor;
});

console.log(livrosOrdenados);