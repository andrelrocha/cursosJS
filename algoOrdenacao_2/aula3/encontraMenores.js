const listaLivros = require("../aula2/array");

function encontraMenores(array, pivo) {
    let menores = 0;

    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++
        }
    }

    trocarLugar(array, array.indexOf(pivo), menores)
    return array;
}

function trocarLugar(array, de, para) {
    const elem1 = array[de];
    const elem2 = array[para];

    [array[para], array[de]] = [elem1, elem2];
}

function divideNoPivo(array) {
    let pivo = array[Math.floor(array.length / 2)];
    encontraMenores(array, pivo)
    let valoresMenores = 0;

    for (let analisando = 0; analisando < array.length; analisando++) {
        let atual = array[analisando];
        if (atual.preco <= pivo.preco && atual !== pivo) {
            trocarLugar(array, analisando, valoresMenores);
            valoresMenores++;
        }
    }

    return array;
}

module.exports = trocarLugar;