export default class User {
    #nome
    #email
    #nascimento
    #role
    #ativo 
    #nomeOriginal
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nomeOriginal = nome
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "estudante"
        this.#ativo = ativo
    }

    //propriedade adicional para armazenar o valor original, uma vez que o construtor já atribuiu o valor a essa propriedade
    get nomeOriginal() {
        return this.#nomeOriginal
    }

    get nome() {
        return this.#nome
    }
    
    get email() {
        return this.#email
    }

    get nascimento() {
        return this.#nascimento
    }

    get role() {
        return this.#role
    }

    get ativo() {
        return this.#ativo
    }
    
    set nome(novoNome) { 
        if (novoNome == "") {
            throw new Error("formato de nome não válido")
        } 
        this.#nome = novoNome.match(/\p{L}{2,}/gu).join(" ");
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.nascimento}, ${this.role}, ${this.ativo}`
    }
}