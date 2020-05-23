module.exports = class BaseUseCase {
    constructor({ service }) {
        this.service = service || {}
    }

    handle = async (req, res) => {
        await Promise.reject(new Error('This handler is not implemented'))
    }
}