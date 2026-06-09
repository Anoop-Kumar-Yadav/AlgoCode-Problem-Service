class BaseError extends Error {
  constructor(name, statusCode, description, details) {
    super(description);
    this.name = name;
    this.statusCode = statusCode;
    this.details = details;
  }
}

module.exports = BaseError;

/* 
        If you don't use Error.captureStackTrace, the "breadcrumb trail" will point to the file where your Custom Error Class is defined, rather than the controller or service file where the error actually happened
        */
