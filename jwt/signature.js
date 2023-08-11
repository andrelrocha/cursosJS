import { generateKeyPairSync, createSign, createVerify } from 'crypto';

//generateKeyPairSync: Esta função é usada para gerar um par de chaves criptográficas de forma síncrona
//createSign: Esta função é utilizada para criar um objeto de assinatura, que permite que você assine dados com uma chave privada. 
//createVerify: Esta função é utilizada para criar um objeto de verificação, que permite que você verifique uma assinatura digital feita com uma chave privada. 


//gerando par de chaves
const {privateKey, publicKey } = generateKeyPairSync('rsa',
    {
        modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
    }
)


//assinando dados
let data = 'Assinando dados com chave privada';
const sign = createSign('rsa-sha256');

sign.update(data);

const signature = sign.sign(privateKey, 'hex');

console.log(`Signature: ${signature}`);

//intermediário 
//data += "Alterando dados"


//envio do documento, assinatura e chave pública para o destinatário
const verify = createVerify('rsa-sha256');

verify.update(data);

const isValid = verify.verify(publicKey, signature, 'hex');

console.log(`isValid: ${isValid}`);