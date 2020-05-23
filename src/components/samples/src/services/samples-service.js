const SamplesRepository = require('../data/samples-repository')

module.exports = class SamplesService {
    constructor() {
        this.repository = new SamplesRepository()
    }

    async getAllSamples() {
        return await this.repository.getAll()
    }

    async getSampleById(id) {
        return (await this.repository.getAll())
            .find(k => k.id === id)
    }
}