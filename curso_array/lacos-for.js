// FOR 

const numeros = [100, 200, 300, 400, 500, 600];
let media = 0;
for (let i = 0; i < numeros.length; i++) {
    media += numeros[i];
}

console.log(media / numeros.length)

// FOR OF

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for (let elemento of notas) {
    somaDasNotas += elemento;
}

const media2 = somaDasNotas / notas.length;

console.log(`A média das notas é ${media2}.`)

// forEach

const notas2 = [10, 6.5, 8, 7.5];

let somaDasNotas2 = 0;

notas.forEach(function (nota) {

    somaDasNotas2 += nota;
});

console.log(somaDasNotas2 / notas2.length)