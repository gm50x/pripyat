module.exports = class AsyncHandler {
    constructor() { }

    middleware(handler) {
        return (req, res, next) =>
            handler(req, res, next)
                .catch(next)
    }
}