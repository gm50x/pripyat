const { BaseUseCase } = require('../../../../core/base')

const SamplesRepository = require('../data/samples-repository')

module.exports = class GetSamples extends BaseUseCase {
    constructor() {
        super()
        this.repository = new SamplesRepository()
    }

    handle = async (req, res) => {
        const data = await this.repository.getAll()
        return res.status(200).json(data)
    }

}