const{sign, verify} = require('jsonwebtoken')
require("dotenv").config()

function createToken(user){
    return sign({
        emailAdd: user.emailAdd,
        userPassword: user.userPassword
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    }
    )
}
// function verifyAToken(req, res, next){
//     const token = req.headers["Authorization"].split("")
// }

module.exports = {
    createToken
}
