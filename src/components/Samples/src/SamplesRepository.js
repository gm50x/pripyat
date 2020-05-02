const { ObjectNotFoundError } = require('../../../core/errors')

module.exports = class SamplesRepository {
    constructor() {
        this.data = [{ id: 1, word: 'foo' }, { id: 2, word: 'bar' }, { id: 3, word: 'fizz' }, { id: 4, word: 'buzz' }, { id: 5, word: 'bin' }, { id: 6, word: 'bazz' }]
    }

    async getAll() {
        return await Promise.resolve(this.data)
    }

    async getById(id = 0) {
        let data = await Promise.resolve(this.data.find(item => item.id === id))
        if (!data) {
            throw new ObjectNotFoundError(`Object ID ${id} does not exist`)
        }
        return data
    }

}