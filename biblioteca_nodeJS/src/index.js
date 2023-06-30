import fs from 'fs';
import chalk from 'chalk';

function extraiLinks(texto) {
    const regex = /\[([^\[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    //utiliza os elementos da nova array p criar objetos, atentando-se ao uso de [] para englobar o elemento da array e () para englobar o novo objeto e não ser confundido com função pelo JS
    const resultados = capturas.map(captura => ({ [captura[1]]: [captura[2]] }))
    return resultados.length !== 0 ? resultados : "Não há links no arquivo";
}

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, "não há arquivo no diretório"));
}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const enconding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
        return extraiLinks(texto);
    } catch (erro) {
        trataErro(erro)
    } finally {
        (console.log(chalk.yellow("Fim da leitura dos arquivos.")))
    }
}

export default pegaArquivo;