const { strictEqual } = require('assert')

const BadRequestError = require('../src/BadRequestError')

describe('BadRequestError', () => {
    it('Should instantiate an error with a default message', () => {
        const err = new BadRequestError()
        const actual = err.message
        const expected = 'Missing or invalid required parameters'
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should instantiate an error with a statusCode 404', () => {
        const err = new BadRequestError()
        const actual = err.statusCode
        const expected = 400
        strictEqual(actual, expected, 'Error Code Differs')
    })
    it('Should instantiate an error with a custom message', () => {
        const customErrorMessage = 'Custom Error Message Test'
        const err = new BadRequestError([], customErrorMessage)
        const actual = err.message
        const expected = customErrorMessage
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should instantiate an error with params and a default message', () => {
        const err = new BadRequestError(['id', 'account'])
        const actual = err.message
        const expected = 'Missing or invalid required parameters: [id, account]'
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should instantiate an error with params and a custom message', () => {
        const customErrorMessage = 'Custom Error Message Test'
        const err = new BadRequestError(['id', 'account'], customErrorMessage)
        const actual = err.message
        const expected = customErrorMessage + ': [id, account]'
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should throw error with a default message', () => {
        try {
            throw new BadRequestError()
        } catch (err) {
            const actual = err.message
            const expected = 'Missing or invalid required parameters'
            strictEqual(actual, expected)
        }
    })
})