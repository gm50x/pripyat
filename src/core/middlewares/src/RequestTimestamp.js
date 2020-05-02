module.exports = class RequestTimestamp {
    constructor() { }

    middleware(req, res, next) {
        req.headers.timestamp = new Date()
        next()
    }
}