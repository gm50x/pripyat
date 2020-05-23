const { BaseUseCase } = require('../../../../core/base')

const ErrorSamplesService = require('../services/error-samples-service')

module.exports = class ForceAsyncError extends BaseUseCase {
    constructor() {
        super()
        this.service = new ErrorSamplesService()
    }

    handle = async (req, res) => {
        this.service.syncError()
    }
}