const CustomError = require("./custom-err")

class AuthError extends CustomError {
    constructor(msg){
        super(msg);
    }
}

module.exports = AuthError;