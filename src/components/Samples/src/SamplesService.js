const SamplesRepository = require('./SamplesRepository')

module.exports = class SamplesService {
    constructor() {
        this.repository = new SamplesRepository()
    }

    async getAllSamples() {
        return await this.repository.getAll()
    }

    async getSampleById(id = 0) {
        return await this.repository.getById(id)
    }

}