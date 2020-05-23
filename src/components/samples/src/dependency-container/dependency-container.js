const GetSamples = require('../handlers/get-samples')
const GetSamplesById = require('../handlers/get-sample-by-id')
const AddSample = require('../handlers/add-sample')
const SamplesRepository = require('../data/samples-repository')
const SamplesService = require('../services/samples-service')

module.exports = class DependencyContainer {
    constructor() {
        this._init()
    }

    _init() {
        this.GetSamples = this._GetSamplesDependency()
        this.GetSamplesById = this._GetSamplesByIdDependency()
        this.AddSample = this._AddSampleDependency()
    }

    _GetSamplesDependency() {
        return new GetSamples({ service: this._InjectServiceDependencyTree() })
    }


    _GetSamplesByIdDependency() {
        return new GetSamplesById({ service: this._InjectServiceDependencyTree() })
    }

    _AddSampleDependency() {
        return new AddSample({ service: this._InjectServiceDependencyTree() })
    }

    _InjectServiceDependencyTree() {
        return new SamplesService({
            repository: new SamplesRepository
        })
    }
}