import User from "./User.js"

export default class Docente extends User {
    constructor(nome, email, nascimento, especialidade, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo)
        this.especialidade = especialidade
    }
    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} foi aprovado no curso de ${curso}, do professor ${this.nome}, especialista em ${this.especialidade}`
    }
}
/*
const novoDocente = new Docente("andre", "a@c.com", "11/02/2023", "Javascript")
console.log(novoDocente.aprovaEstudante("lucio", "POO"))
*/