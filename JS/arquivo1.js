// Number (int)

const x=3;

const primeiroNumero=10;
const segundoNumero=15;

var operacaoMat=primeiroNumero*segundoNumero;

// Float

const numeroFloat=10.5;
const numeroFloat2=9.5;
const numeroFloat3= .5;

var operacaoMat2=numeroFloat+numeroFloat2;

let operacaoMatMista=operacaoMat*numeroFloat3;

// String

let texto1="Olá mundo";
let citacao='Andre disse "oi"';
const citacaoNormal=citacao.toLowerCase();

console.log(operacaoMat,operacaoMat2,operacaoMatMista,texto1,citacao,citacaoNormal);

// Boolean

let numeroBoo=10;
const numeroBoo1=15;

if (numeroBoo!=numeroBoo1) {

    console.log("O tipo boolean é show demais");
}

for (numeroBoo;numeroBoo<=numeroBoo1;numeroBoo++) {

    console.log("Ele inclusive me deixa usar loops.")
    if (numeroBoo==numeroBoo1) {

        console.log("Ok, cansei.")
    }
}