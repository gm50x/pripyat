const { BaseUseCase } = require('../../../../core/base')


module.exports = class RouteNotFound extends BaseUseCase {
    constructor() {
        super()
    }

    handle = async (req, res) => {
        res.status(404).json({error: 'This route does not existe'})
    }
}