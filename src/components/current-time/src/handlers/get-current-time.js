const { BaseUseCase } = require('../../../../core/base')

const TimeService = require('../services/time-service')

module.exports = class GetCurrentTime extends BaseUseCase {
    constructor() {
        super()
        this.service = new TimeService()
    }

    handle = async (req, res) => {
        const time = await this.service.getCurrentTime()
        res.status(200).json({ time: time.toString() })
    }
}