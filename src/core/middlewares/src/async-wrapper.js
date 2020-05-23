module.exports = class AsyncHandler {
    constructor() { }

    wrap = handler =>
        (req, res, next) =>
            handler(req, res, next)
                .catch(next)
}
