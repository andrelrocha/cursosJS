import Docente from "./Docente.js"
import User from "./User.js"
import Admin from "./Admin.js"

//const novoUser = new User("Marina", "m@m.com", "2023-02-14")
//console.log(novoUser.exibirInfos())

const novoAdmin = new Admin("Andre", "a@a.com","10/02/2023")
console.log(novoAdmin.nome)
novoAdmin.nome = "Marina Mêlo2 de Çaldanha8#A"
console.log(novoAdmin.nome)

console.log(novoAdmin.nomeOriginal)

novoAdmin.nome = ""