const path = require('path')
const fs = require('fs')

module.exports = class SamplesRepository {
    constructor() {
        this.data = JSON.parse(fs.readFileSync(path.join(__dirname, 'data.json')))
    }

    getAll = async () => Promise.resolve(this.data)

    add = async data => {
        this.data.push({ id: this.data.length + 1, ...data })
        fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(this.data))
        return Promise.resolve()
    }
}