const SamplesService = require('./SamplesService')
module.exports = class GetAllSamples {
    constructor() {
        this.service = new SamplesService()
    }

    async execute(req, res, next) {
        const result = await this.service.getAllSamples()
        return res.status(200).json(result)
    }
}

