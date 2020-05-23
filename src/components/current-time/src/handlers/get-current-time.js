const { BaseUseCase } = require('../../../../core/base')

module.exports = class GetCurrentTime extends BaseUseCase {
    constructor(di) {
        super(di)
    }

    handle = async (req, res) => {
        const time = await this.service.getCurrentTime()
        res.status(200).json({ time: time.toString() })
    }
}