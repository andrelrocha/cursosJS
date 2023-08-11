import { createHash } from 'crypto';


class User {
    constructor(name, password) {
        this.name = name;
        this.hash = this.hashCreation(password);
    }

    authenticate(name, password) {
        if (this.name === name && this.hash === this.hashCreation(password)) {
            console.log("Authenticated");
            return true;
        }

        //console.log("Not Authenticated");
        return false;
    }

    hashCreation(data) {
        return createHash("sha256").update(data).digest("hex");
    }
}

const newUser = new User("John", "senhaFacil");

const senhasComuns = ["senha", "123456", "senha123", "senhaFacil", "admin", "blink182", "brasil", "senha123456"]

for (let senhaTeste of senhasComuns) {
    const authentication = newUser.authenticate("John", senhaTeste);

    if (authentication) {
        console.log(`Senha encontrada: ${senhaTeste}`);
        break;
    }
}