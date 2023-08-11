import { createHash } from "crypto";

function hashCreation(data, strategy) {
    return createHash(strategy).update(data).digest("hex");
}

const senhasComuns = ["senha", "123456", "senha123", "admin", "1234", "blink182","meuAniversario", "senha123456", "brasil", "102030"]

const hashesVazadas = ["21232f297a57a5a743894a0e4a801fc3",
"cedf5ab7b5c5852b3ed35d7dbe3c3835",
"81dc9bdb52d04dc20036dbd8313ed055"]

const rainbowTable = senhasComuns.map(senha => {
    return [senha, hashCreation(senha, "MD5")] 
})

hashesVazadas.map(hashLeaked => {
    rainbowTable.map( generatedPair => {
        if (generatedPair[1] === hashLeaked) {
            console.log(`Senha encontrada: ${generatedPair[0]}`)
        }   
    })

    /*
    const found = rainbowTable.find(rainbow => rainbow[1] === hashLeaked)

    if (found) {
        console.log(`Senha encontrada: ${found[0]}`)
    }
    */
})