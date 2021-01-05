const ForceAsyncError = require('../handlers/force-async-error')
const ForceSyncError = require('../handlers/force-sync-error')
const ErrorSamplesService = require('../services/error-samples-service')

module.exports = class DependencyContainer {
    constructor() {
        this._init()
    }

    _init() {
        this.ForceAsyncError = this._InjectForceAsyncErrorTree()
        this.ForceSyncError = this._InjectForceSyncErrorTree()
    }

    _InjectForceAsyncErrorTree() {
        return new ForceAsyncError({ service: this._InjectServiceDependencyTree() })
    }

    _InjectForceSyncErrorTree() {
        return new ForceSyncError({ service: this._InjectServiceDependencyTree() })
    }

    _InjectForceSyncErrorTree() {
        return new ForceSyncError({ service: this._InjectServiceDependencyTree() })
    }

    _InjectServiceDependencyTree() {
        return new ErrorSamplesService()
    }
}