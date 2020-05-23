const { BaseUseCase } = require('../../../../core/base')

module.exports = class GetSampleById extends BaseUseCase {
    constructor(di) {
        super(di)
    }

    handle = async (req, res) => {
        const { id } = req.params
        const data = await this.service.getSampleById(Number(id))
        return res.status(200).json(data)
    }

}