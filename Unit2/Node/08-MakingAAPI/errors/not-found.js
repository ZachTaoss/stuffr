const CustomError = require(`./custom-err`)

class NotFound extends CustomError {
    constructor(msg){
        super(msg)
    }
}

module.exports = NotFound