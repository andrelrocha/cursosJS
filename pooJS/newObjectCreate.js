const user = {
    init: function(nome, email) {
        this.nome = nome,
        this.email = email
    },
    exibirInfos: function(nome) {
        return this.nome
    }
}

const novoUser = Object.create(user)
novoUser.init("andre", "a@a.com")
console.log(novoUser.exibirInfos())

const novoUsuario = Object.create(user, {
    role: {value: "admin"}
})
novoUsuario.init("Marina", "m@m.com")
console.log(`O role do usuário ${novoUsuario.exibirInfos()} é ${novoUsuario.role}`)