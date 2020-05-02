const morgan = require('morgan')

module.exports = class MorganLogger {
    constructor() { }

    middleware(req, res, next) {
        morgan.token('timestamp', req => req.headers.timestamp)
        return morgan(':timestamp :method :url :status :response-time ms')
    }
}