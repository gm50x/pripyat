module.exports = class GetSystemStatus {
    constructor() { }

    async execute(req, res, next) {
        const result = await Promise.resolve({ status: 'online' })
        return res.status(200).json(result)
    }
}

