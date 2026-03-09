const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class ForbiddenError extends BaseError {
    constructor(clientName, details) {
        super('ForbiddenError',StatusCodes.FORBIDDEN,`${clientName || "You"} don't have sufficient rights to access the requested resource.`,details)
    }
}

module.exports = ForbiddenError