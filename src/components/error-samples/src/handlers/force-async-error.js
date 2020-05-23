const { BaseUseCase } = require('../../../../core/base')

module.exports = class ForceAsyncError extends BaseUseCase {
    constructor(di) {
        super(di)
    }

    handle = async (req, res) => {
        await this.service.asyncError()
    }
}