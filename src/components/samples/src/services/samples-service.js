const SamplesRepository = require('../data/samples-repository')

module.exports = class SamplesService {
    constructor({ repository }) {
        this.repository = repository
    }

    async getAllSamples() {
        return await this.repository.getAll()
    }

    async getSampleById(id) {
        return (await this.repository.getAll())
            .find(k => k.id === id)
    }
}