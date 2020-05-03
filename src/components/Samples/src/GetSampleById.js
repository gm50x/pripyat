const SamplesService = require('./SamplesService')
const { BadRequestError } = require('../../../core/errors')

module.exports = class GetSampleById {
    constructor() {
        this.service = new SamplesService()
    }

    async execute(req, res, next) {
        const id = Number(req.params.id)

        if (!id) {
            throw new BadRequestError(['id'])
        }

        const result = await this.service.getSampleById(id)
        return res.status(200).json(result)
    }
}

