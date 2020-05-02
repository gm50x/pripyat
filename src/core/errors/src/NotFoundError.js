module.exports = class NotFoundError extends Error {
    constructor({ method = '', path = '' }) {
        super(`${method} ${path} not found`.replace(/^\s+/g, ''))
        this.statusCode = 404
    }
}