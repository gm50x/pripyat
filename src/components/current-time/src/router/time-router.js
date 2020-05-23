const { BaseRouter } = require('../../../../core/base')

const DependencyContainer = require('../dependency-container/dependency-container')

module.exports = class TimeRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    _init() {
        this.addRoute('GET', '', new DependencyContainer().GetCurrentTime)
    }
}