module.exports = class ErrorHandler {
    constructor() { }

    middleware(err, req, res, next) {
        res.status(err.statusCode || 500).json({ error: err.message })
    }
}