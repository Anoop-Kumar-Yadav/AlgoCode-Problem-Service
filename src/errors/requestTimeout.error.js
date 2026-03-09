const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class RequestTimeoutError extends BaseError {
    constructor(details) {
        super('RequestTimeout',StatusCodes.REQUEST_TIMEOUT,`Timeout Error!`,details)
    }
}

module.exports = BadRequest