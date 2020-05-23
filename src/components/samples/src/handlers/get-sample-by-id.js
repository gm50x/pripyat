const { BaseUseCase } = require('../../../../core/base')

const SamplesService = require('../services/samples-service')

module.exports = class GetSampleById extends BaseUseCase {
    constructor() {
        super()
        this.service = new SamplesService()
    }

    handle = async (req, res) => {
        const { id } = req.params
        const data = await this.service.getSampleById(Number(id))
        return res.status(200).json(data)
    }

}