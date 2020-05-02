module.exports = class NotImplementedError extends Error {
    constructor(message = 'Not implemented') {
        super(message)
    }
}