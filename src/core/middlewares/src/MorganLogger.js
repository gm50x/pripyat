const morgan = require('morgan')

module.exports = class MorganLogger {
    constructor() {
        this._init()
    }

    _init() {
        morgan.token('timestamp', req => req.headers.timestamp.toString().slice(0, 24) + ' >')
    }

    middleware(req, res, next) {
        return morgan(':timestamp :method :url :status :response-time ms')
    }
}