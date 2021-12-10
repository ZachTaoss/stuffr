const CustomAPIError = require('./custom-err')
const { statusCodes, StatusCodes } = require(`http-status-codes`)

class BadRequest extends CustomAPIError {
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.Bad_Request
    }
}

module.exports == BadRequest