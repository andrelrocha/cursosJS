const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) {
    const somaDasNotas = notasDaSala.reduce((acc, nota) => acc + nota, 0);
    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A nota média da Sala JS foi ${calculaMedia(salaJS)}`)
console.log(`A nota média da Sala Java foi ${calculaMedia(salaJava)}`)
console.log(`A nota média da Sala Python foi ${calculaMedia(salaPython)}`)

// let numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce(function(acc, current) {
//    return acc + current;
//  }, 0);
// console.log(sum); // 15
  
// acc: This is the accumulator, which stores the result of the previous iteration and it is initialized with the initial value passed to reduce() method.
// current: This is the current element in the array being processed