const GetCurrentTime = require('../handlers/get-current-time')
const TimeService = require('../services/time-service')

module.exports = class DependencyContainer {
    constructor() {
        this._init()
    }

    _init() {
        this.GetCurrentTime = this._InjectGetCurrentTimeDependencyTree()
    }

    _InjectGetCurrentTimeDependencyTree() {
        return new GetCurrentTime({ service: this._InjectServiceDependencyTree() })
    }

    _InjectServiceDependencyTree() {
        return new TimeService()
    }
}