import { createHash } from 'crypto';

function hashCreation(data) {
    return createHash("sha256").update(data).digest("hex");
}

class User {
    constructor(name, password) {
        this.name = name;
        this.hash = hashCreation(password);
    }

    authenticate(name, password) {
        if (this.name === name && this.hash === hashCreation(password)) {
            console.log("Authenticated");
            return true;
        }

        console.log("Not Authenticated");
        return false;
    }
}

const newUser = new User("John", "password");

const returnLogin = newUser.authenticate("John", "password");

console.log(returnLogin);

export { User, hashCreation }