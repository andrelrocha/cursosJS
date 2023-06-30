const alunos= ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

const sala1= alunos.slice(0,(alunos.length/2));

const sala2=alunos.slice((alunos.length/2),21);
console.log(sala1)
console.log(sala2)
//
const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1,2,"Rodrigo")
console.log(nomes)
//
const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

const salasUnificadas=salaJS.concat(salaPython);
console.log(salasUnificadas)
//
const alunosNovos=["João","Juliana","Ana","Caio"];
const mediasNovas=[10,8,7.5,9];

const listaDeAlunosEMedias=[alunosNovos,mediasNovas]
console.log(`A aluna da posição 1 da lista de alunos é ${listaDeAlunosEMedias[0][1]}`)
console.log(`A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}`)