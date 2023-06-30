const listaLivros = require("./arrayOrdenado");

function busca(array, de, ate, valorBuscado) {
    if (de > ate) {
        return -1;
    }
    
    const meio = Math.floor((de + ate) / 2)
    const atual = array[meio];

    if (valorBuscado === atual.preco) {
        return meio;
    }
    else if (valorBuscado < atual.preco) {
        return busca(array, de, (meio-1), valorBuscado)
    } else {
        return busca(array, (meio+1), ate, valorBuscado)
    }
}

const valorLivro = 33;

const buscaLivroValor = busca(listaLivros, 0, listaLivros.length-1, valorLivro)

if (buscaLivroValor === -1) {
    console.log(`Não há nenhum livro no valor de $ ${valorLivro},00 em nossa base de dados.`)
} else {
    console.log(`O livro de valor R$ ${valorLivro},00 possui index ${buscaLivroValor} na lista passada, sendo um livro sobre a linguagem ${listaLivros[buscaLivroValor].titulo}.`)
}