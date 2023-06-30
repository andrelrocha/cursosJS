const notas = [10,6.5,8,7.5];

const media = (notas[0] + notas[1] + notas[2] +notas[3])/notas.length;

console.log(media)

const notas2=[10,6,8];
notas2.push(7)

const media2=(notas2[0] + notas2[1] + notas2[2] + notas2[3])/notas2.length;

console.log(media2)

const notasErradas=[10,6,8,5.5,10];
notasErradas.pop()

console.log(notasErradas)