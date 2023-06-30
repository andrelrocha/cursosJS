const user = {
    nome: "Andre",
    email: "andre@provedor.com",
    exibeInfos: function() {
        console.log(this.nome, this.email)
    }
}

user.exibeInfos()

//bind()
const exibir = function() {
    console.log(this.nome)
}
const exibirNome = exibir.bind(user)
exibirNome()


//call()
const exibirCall = function(prefixo, sufixo) {
    console.log(prefixo + this.nome + sufixo);
};

exibirCall.call(user, "Olá, ", "!"); 


//apply()
const apresentar = function(cumprimento, finalizacao) {
    console.log(cumprimento + this.nome + finalizacao);
};

apresentar.apply(user, ["Olá, ", "! Como você está hoje?"]);


//Object.setPrototypeOf
const falando = {
    falar() {return `Meu nome é ${this.nome}. Eu estou falando.`}
};

Object.setPrototypeOf(user, falando);
console.log(user.falar()); 