//declaração de função

function soma(num1,num2) {

    return num1 + num2;
}

console.log(soma(8,12))

//expressão de função

const multiplicacao = function (num1,num2) {return num1*num2}

console.log(multiplicacao(2,4))

//arrow function

const apresentarArrow = nome => `meu nome é ${nome}`;
const divisao = (num1,num2) => num1/num2;

console.log(divisao(10,2))

const somaNumerosPqns= (num1,num2) => {
    if (num1 > 10 || num2 > 10) {

        return ("somente números de 1 a 9")
    } else {
        return num1 + num2;
    }
}

console.log(somaNumerosPqns(10,15))