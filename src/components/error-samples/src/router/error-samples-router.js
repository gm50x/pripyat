const { BaseRouter } = require('../../../../core/base')

const DependencyContainer = require('../dependency-container/dependency-container')

module.exports = class ErrorSamplesRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this.di = new DependencyContainer()
        this._init()

    }

    _init() {
        this.addRoute('GET', '/async', this.di.ForceAsyncError)
        this.addRoute('GET', '/sync', this.di.ForceSyncError)
    }
}