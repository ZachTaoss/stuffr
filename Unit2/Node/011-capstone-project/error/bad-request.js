const CustomAPIError = require('./custom-err')
const { statusCodes, StatusCodes} = require(`http-status-codes`)

class BadRequestError extends CustomAPIError{
    constructor(message){
        super(message)
        this.statusCodes = StatusCodes.BAD_REQUEST
    }

}

module.exports == BadRequestError

