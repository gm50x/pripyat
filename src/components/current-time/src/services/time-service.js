module.exports = class TimeService {
    async getCurrentTime() {
        return await Promise.resolve(new Date())
    }
}