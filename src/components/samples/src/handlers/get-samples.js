const { BaseUseCase } = require('../../../../core/base')

module.exports = class GetSamples extends BaseUseCase {
    constructor({ service }) {
        super()
        this.service = service
    }

    handle = async (req, res) => {
        const data = await this.service.getAllSamples()
        return res.status(200).json(data)
    }

}