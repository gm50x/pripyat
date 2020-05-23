module.exports = class BaseUseCase {
    handle = async (req, res) => {
        await Promise.reject(new Error('This handler is not implemented'))
    }
}