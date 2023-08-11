import jwt from 'jsonwebtoken';

const secretKey = "secretKey"

const token = jwt.sign(
    {
        apelido: "ar",
        curso: "segurança e node.js"
    }, secretKey
);

console.log(token)

const tokenDecoded = jwt.verify(token, secretKey)

console.log(tokenDecoded)