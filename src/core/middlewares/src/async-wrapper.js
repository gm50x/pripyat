module.exports = class AsyncWrapper {
    constructor() { }

    wrap = handler =>
        (req, res, next) =>
            handler(req, res, next)
                .catch(next)
}
