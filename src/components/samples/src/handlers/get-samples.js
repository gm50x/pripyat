const { BaseUseCase } = require('../../../../core/base')

module.exports = class GetSamples extends BaseUseCase {
    constructor(di) {
        super(di)
    }

    handle = async (req, res) => {
        const data = await this.service.getAllSamples()
        return res.status(200).json(data)
    }

}