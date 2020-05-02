const core = require('../../../core')

const { Router } = core.Router
const NotFound = require('./NotFound')

module.exports = class NotFoundRouter {
    constructor() {
        this.router = new Router('*')

        this._init()
    }

    _init() {
        this.router.addRoute('ALL', '', new NotFound())
    }

    getRoutes() {
        return this.router.getRoutes()
    }

}