const numeros = [100,200,300,400,500,600];
let media=0;
for (let i=0; i<numeros.length; i++) {
    media+=numeros[i];
}

console.log(media/numeros.length)

//
const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]


for (let i = 0; i < notasGerais.length; i++) {
    let media2 = 0;
    let mediaAluno=0;
    for (let j = 0; j < notasGerais[i].length; j++) {
      media2 += notasGerais[i][j]
    }
    mediaAluno=(media2/notasGerais[i].length);
    console.log(mediaAluno)
  }