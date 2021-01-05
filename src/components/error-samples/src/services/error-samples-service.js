module.exports = class ErrorSampleService {
    async asyncError() {
        return await Promise.reject(new Error('Something went wrong'))
    }

    syncError() {
        throw new Error(`Something sync happned and it's bad`)
    }
}