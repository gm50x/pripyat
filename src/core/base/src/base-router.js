const ExpressRouter = require('express').Router

const { AsyncWrapper } = require('../../middlewares')

module.exports = class BaseRouter {
    constructor(basePath = '') {
        this._routes = ExpressRouter()
        this.basePath = basePath
        this.asyncWrapper = new AsyncWrapper().wrap
    }


    addRoute(method, path = '', handler) {
        this._routes[method.toLowerCase()](
            `/${this.basePath}/${path}`
                .replace(/\/\/+/, '/')
                .replace(/\/+$/, ''),
            this.asyncWrapper(handler.handle)
        )
    }

    getRoutes() {
        return this._routes
    }
}