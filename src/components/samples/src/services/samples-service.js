const { BaseService } = require('../../../../core/base')

module.exports = class SamplesService extends BaseService {
    constructor(di) {
        super(di)
    }

    async getAllSamples() {
        return await this.repository.getAll()
    }

    async getSampleById(id) {
        return (await this.repository.getAll())
            .find(k => k.id === id)
    }

    async addSample(sample) {
        this.repository.add(sample)
    }
}