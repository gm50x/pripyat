module.exports = class MethodNotImplementedError extends Error {
    constructor({ method = 'GET', path = '/' }) {
        super(`${method} ${path} not implemented`.replace(/^\s+/g, ''))
        this.statusCode = 500
    }
}