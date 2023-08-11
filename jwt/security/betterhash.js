import { scryptSync, randomBytes, timingSafeEqual } from 'crypto'

function hashCreation(password) {
    const randomizer = randomBytes(16).toString('hex')
    const hashedPassword = scryptSync(password, randomizer, 64).toString('hex')

    return `${randomizer}:${hashedPassword}`
}

class User {
    constructor(name, password) {
        this.name = name;
        [this.randomizer, this.hash] = hashCreation(password).split(':');
    }

    authenticate(name, password) {
        const hash = scryptSync(password, this.randomizer, 64).toString('hex')
        const authenticated = timingSafeEqual(Buffer.from(hash), Buffer.from(this.hash))

        if (this.name === name && authenticated) {
            console.log("Authenticated");
            return true;
        }

        console.log("Not Authenticated");
        return false;
    }
}

const newUser = new User("John", "password");
console.log(newUser)

newUser.authenticate("John", "senha");