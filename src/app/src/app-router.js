const { BaseRouter } = require('../../core/base')

const { TimeRouter } = require('../../components/current-time')
const { SamplesRouter } = require('../../components/samples')
const { ErrorSamplesRouter } = require('../../components/error-samples')
const { NotFoundRouter } = require('../../components/not-found')

module.exports = class AppRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    addModule(mod) {
        this._routes.use(mod.getRoutes())
    }

    _init() {
        this.addModule(new TimeRouter('time'))
        this.addModule(new SamplesRouter('samples'))
        this.addModule(new ErrorSamplesRouter('error'))
        this.addModule(new NotFoundRouter('*'))
    }
}