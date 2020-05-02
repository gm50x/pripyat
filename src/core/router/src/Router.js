const ExpressRouter = require('express').Router

const { AsyncHandler, RequestTimestamp } = require('../../middlewares')

module.exports = class Router {
    constructor(basePath = '') {
        this._routes = ExpressRouter()
        this.requestTimestamp = new RequestTimestamp().middleware
        this.asyncHandler = new AsyncHandler().middleware
        this.basePath = basePath
        this._init()
    }

    _init() {
        this._routes.use(this.requestTimestamp)
    }

    addRoute(method, path = '', handler) {
        method = method.toLowerCase()
        this._routes[method](`/${this.basePath}/${path}`.replace(/\/+$/, ''), this.asyncHandler(handler.execute.bind(handler)))
    }

    addModule(mod) {
        this._routes.use(mod.getRoutes())
    }

    getRoutes() {
        return this._routes
    }
}