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

const newUser = new User("John", "131321");

for (let senhaTeste = 0; senhaTeste < 1000000; senhaTeste++) {
    const authentication = newUser.authenticate("John", senhaTeste.toString());

    if (authentication) {
        console.log(`Senha encontrada: ${senhaTeste}`);
        break;
    }
}

