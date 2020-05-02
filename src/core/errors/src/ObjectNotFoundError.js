module.exports = class ObjectNotFoundError extends Error{
    constructor(message = 'Object not found') {
        super(message)
        this.statusCode = 404
    }
}