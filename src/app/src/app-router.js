const { BaseRouter } = require('../../core/base')

module.exports = class AppRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
    }

    addModule(mod) {
        this._routes.use(mod.getRoutes())
    }
}