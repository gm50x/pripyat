const express = require('express')

const Core = require('../../core')
const Components = require('../../components')
const { ErrorHandler, RequestTimestamp, MorganLogger } = Core.Middlewares
const { Router } = Core.Router
const { NotFoundRouter } = Components.NotFound
const { SamplesRouter } = Components.Samples
const { SystemStatusRouter } = Components.SystemStatus

module.exports = class App {
    constructor() {
        this.app = express()
        this.router = new Router()
        this.requestTimestamp = new RequestTimestamp().middleware
        this.logger = new MorganLogger().middleware
        this.errorHandler = new ErrorHandler().middleware
        this._init()
    }

    _init() {
        this.app.use(this.requestTimestamp)
        this.app.use(this.logger())
        this.router.addModule(new SamplesRouter('samples'))
        this.router.addModule(new SystemStatusRouter('system-status'))
        this.router.addModule(new NotFoundRouter())
        this.app.use(this.router.getRoutes())
        this.app.use(this.errorHandler)
    }

    start(port) {
        port = port || 8000
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}