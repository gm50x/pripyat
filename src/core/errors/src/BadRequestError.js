module.exports = class BadRequestError extends Error {
    constructor(params = [], message = 'Missing or invalid required parameters') {
        super(message + (params.length ? ': [' + params.join(', ') + ']' : ''))
        this.statusCode = 400
    }
    // constructor({ message = 'Missing or invalid required parameters', params = [] }) {
    //     super(message + (params.length ? ': [' + params.join(', ') + ']' : ''))
    //     this.statusCode = 400
    // }
}