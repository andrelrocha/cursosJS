import fs from 'fs';

import chalk from 'chalk';

const enconding = 'utf-8';

function trataErro(erro) {
    throw new Error(chalk.red(erro.code, "não há arquivo no diretório"));
}

//promises com then()
function pegaArquivo(caminhoDoArquivo) {
    fs.promises.readFile(caminhoDoArquivo, enconding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}

// async/await (await antes dos trechos de código em que temos que aguardar algo)
async function pegaArquivo2(caminhoDoArquivo) {
    try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, enconding)
    console.log(chalk.blue(texto))
    } catch (erro) {
        trataErro(erro)
    } finally {(console.log(chalk.yellow("Fim do programa.")))
    }
}