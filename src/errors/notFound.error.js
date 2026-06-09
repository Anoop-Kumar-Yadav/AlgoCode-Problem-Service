const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFound extends BaseError {
    constructor(propertyName, details) {
        super('NotFound',StatusCodes.NOT_FOUND,`Resource not found.`,details)
    }
}

module.exports = NotFound