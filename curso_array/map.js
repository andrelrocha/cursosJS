const notas = [10, 9.5, 8, 7, 6];

const notasAtualizadas = notas.map((nota) => {
    if (nota+1 <= 10) {  
        return nota + 1;
    } else {
        return nota = 10;
    }
    // return nota + 1 >= 10 ? 10 : nota +1;
})

console.log(notasAtualizadas)

////////////////////////////////

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesFormatados = nomes.map((nota) => {
    return nota.toUpperCase()
})
// const nomesFormatados = nomes.map((nota) => nota.toUpperCase())

console.log(nomesFormatados)