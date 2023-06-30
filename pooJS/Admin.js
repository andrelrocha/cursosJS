import User from "./User.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(nomeDoCurso, vagas) {
       return `O curso de ${nomeDoCurso} possui ${vagas} vagas.` 
    }
}
/*
const novoAdmin = new Admin("Andre", "a@b.com", "10/02/2023")

console.log(novoAdmin.exibirInfos())

console.log(novoAdmin.criarCurso("Javascript", 50))
*/