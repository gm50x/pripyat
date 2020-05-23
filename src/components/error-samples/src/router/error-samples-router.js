const { BaseRouter } = require('../../../../core/base')

const ForceAsyncError = require('../handlers/force-async-error')
const ForceSyncError = require('../handlers/force-sync-error')

module.exports = class ErrorSamplesRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    _init() {
        this.addRoute('GET', '/async', new ForceAsyncError())
        this.addRoute('GET', '/sync', new ForceSyncError())
    }
}