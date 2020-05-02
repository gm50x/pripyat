const core = require('../../../core')

const { Router } = core.Router

const GetSystemStatus = require('./GetSystemStatus')

module.exports = class SystemStatusRouter {
    constructor(basePath) {
        this.router = new Router(basePath)
        this._init()
    }

    _init() {
        this.router.addRoute('GET', '', new GetSystemStatus())
    }

    getRoutes() {
        return this.router.getRoutes()
    }
}