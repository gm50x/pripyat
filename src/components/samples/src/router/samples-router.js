
const { BaseRouter } = require('../../../../core/base')

const GetSamples = require('../handlers/get-samples')
const GetSamplesById = require('../handlers/get-sample-by-id')

module.exports = class SamplesRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    _init() {
        super.addRoute('GET', '', new GetSamples())
        super.addRoute('GET', ':id', new GetSamplesById())
    }
}