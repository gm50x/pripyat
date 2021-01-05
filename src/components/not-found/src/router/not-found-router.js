const { BaseRouter } = require('../../../../core/base')

const RouteNotFound = require('../handlers/route-not-found')

module.exports = class NotFoundRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    _init() {
        this.addRoute('ALL', '', new RouteNotFound({}))
    }
}