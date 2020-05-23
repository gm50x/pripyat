const GetSamples = require('../handlers/get-samples')
const GetSamplesById = require('../handlers/get-sample-by-id')

const SamplesRepository = require('../data/samples-repository')
const SamplesService = require('../services/samples-service')

module.exports = class DependencyContainer {
    constructor() {
        this._init()
    }

    _init() {
        this.GetSamples = this._GetSamplesDependency()
        this.GetSamplesById = this._GetSamplesByIdDependency()
    }

    _GetSamplesDependency() {
        return new GetSamples({
            service: new SamplesService({
                repository: new SamplesRepository()
            })
        })
    }

    _GetSamplesByIdDependency() {
        return new GetSamplesById({
            service: new SamplesService({
                repository: new SamplesRepository
            })
        })
    }
}