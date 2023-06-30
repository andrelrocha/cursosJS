const user = {
    nome: "Andre",
    email: "andre@provedor.com",
    nascimento: "1999/11/09",
    role: "estudante",
    ativo: true,
    exibeInfos: function() {
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso: function() {
        console.log(`curso criado por ${this.nome}`)
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibeInfos()