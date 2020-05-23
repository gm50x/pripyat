const { BaseUseCase } = require('../../../../core/base')

module.exports = class AddSample extends BaseUseCase {
    constructor(di) {
        super(di)
    }

    handle = async (req, res) => {
        const data = {
            word: req.body.word
        }
        await this.service.addSample(data)
        return res.status(200).json()
    }

}