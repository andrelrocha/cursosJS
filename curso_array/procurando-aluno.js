const alunosNovos = ["João", "Juliana", "Ana", "Caio"];
const mediasNovas = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunosNovos, mediasNovas]

function exibeNomeENota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {
        console.log(`${aluno} está cadastrado!`)

        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];
        // const [alunos,medias]=listaDeAlunosEMedias;
        const indice = listaDeAlunosEMedias[0].indexOf(aluno);
        const mediaAluno = listaDeAlunosEMedias[1][indice];
        console.log(`${aluno} tirou nota ${mediaAluno}`)
    } else {
        console.log("Aluno não encontrado.")
    }
}

exibeNomeENota("João")