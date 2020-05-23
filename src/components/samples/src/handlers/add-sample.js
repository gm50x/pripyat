const { BaseUseCase } = require('../../../../core/base')
const SamplesRepository = require('../data/samples-repository')

module.exports = class AddSample extends BaseUseCase {
    constructor() {
        super()
        this.repository = new SamplesRepository()
    }

    handle = async (req, res) => {
        console.log(req.body)
        const data = {
            word: req.body.word
        }

        await this.repository.add(data)

        return res.status(204).json()
    }

}