const { NotFoundError } = require('../../../core').Errors

module.exports = class NotFound {
    constructor() { }

    async execute(req, res, next) {
        await Promise.reject(new NotFoundError(req))
    }
}