const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10]

novasNotas.push(15);

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);


/// METODO FALHO
const notas1 = [7, 7, 8, 9];
// isso faz com que o JS entenda as duas variaveis como a mesma, logo mudanças em uma, surtirão efeito nas duas, 
//afinal para ambas foi alocado o mesmo espaço da memória
const novasNotas1 = notas1;

novasNotas1.push(10);

console.log(`As novas notas são ${novasNotas1}`);
console.log(`As notas originais são ${notas1}`);