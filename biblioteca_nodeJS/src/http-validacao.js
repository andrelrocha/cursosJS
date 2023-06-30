import fetch from 'node-fetch'
import chalk from 'chalk';

function extraiLinks(arrLinks) {
    //retorna uma str dos elementos separados por "," 
    const elementosStr = arrLinks.map((objetoLink) => Object.values(objetoLink)).join();
    //cria uma nova array em que todos os elementos são separados por ","
    const novaArray = elementosStr.split(",");
    return novaArray
}

async function checaStatus(arrUrl) {
    //Usa Promise.all para esperar por todas as respostas da função fetch, que é uma requisição HTTP
    const arrStatus = await Promise.all(arrUrl.map(async (url) => {
            //ao analisar o status da url, ou encontrará c o status, ou retornará o erro em manejaErros
            try {
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return manejaErros(erro);
            }
        })
    )
    return arrStatus
}

function manejaErros(erro) {
    if (erro.code === 'ENOTFOUND') {
        return "link não encontrado";
    } else {
        return "ocorreu algum erro";
    } 
}

//Recebe uma lista de links como objetos e retorna um novo array de objetos, com o status da requisição HTTP adicionado
export default async function listaValidada(listaDeLinks) {
    const links = extraiLinks(listaDeLinks);
    const status = await checaStatus(links);
    
    //Retorna o array original de objetos com links, com o status da requisição adicionado, spreadando os elementos que já estavam, além do status
    return listaDeLinks.map((objeto, indice) => ({
        ...objeto, 
        status: status[indice]
    }))
}