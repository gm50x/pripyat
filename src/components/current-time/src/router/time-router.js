const { BaseRouter } = require('../../../../core/base')

const GetCurrentTime = require('../handlers/get-current-time')

module.exports = class TimeRouter extends BaseRouter {
    constructor(basePath) {
        super(basePath)
        this._init()
    }

    _init() {
        this.addRoute('GET', '', new GetCurrentTime)
    }
}