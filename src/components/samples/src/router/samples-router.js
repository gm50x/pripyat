
const { BaseRouter } = require('../../../../core/base')

const DependencyContainer = require('../dependency-container/dependency-container')

module.exports = class SamplesRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    _init() {
        super.addRoute('GET', '', new DependencyContainer().GetSamples)
        super.addRoute('POST', '', new DependencyContainer().AddSample)
        super.addRoute('GET', ':id', new DependencyContainer().GetSamplesById)
    }
}