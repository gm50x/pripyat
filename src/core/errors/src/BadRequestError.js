module.exports = class BadRequestError extends Error {
    constructor({ message = 'Missing or invalid required parameters', params = [] }) {
        super(message + ': [' + params.join(', ') + ']')
        this.statusCode = 400
    }
}