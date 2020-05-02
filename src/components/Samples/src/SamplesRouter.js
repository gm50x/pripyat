const core = require('../../../core')

const { Router } = core.Router

const GetAllSamples = require('./GetAllSamples')
const GetSampleById = require('./GetSampleById')


module.exports = class SamplesRouter {
    constructor(basePath) {
        this.router = new Router(basePath)
        this._init()
    }

    _init() {
        this.router.addRoute('GET', '', new GetAllSamples())
        this.router.addRoute('GET', ':id', new GetSampleById())

    }

    getRoutes() {
        return this.router.getRoutes()
    }
}