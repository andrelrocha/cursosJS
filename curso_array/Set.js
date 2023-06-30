const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

//const meuSet = new Set(nomes);
//meuSet.add(10)
//const nomesAtualizados = [...meuSet];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados)