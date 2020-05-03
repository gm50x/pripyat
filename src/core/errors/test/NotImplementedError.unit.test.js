const { strictEqual } = require('assert')

const NotImplementedError = require('../src/NotImplementedError')

describe('NotImplementedError', () => {
    it('Should instantiate an error with a default message', () => {
        const err = new NotImplementedError()
        const actual = err.message
        const expected = 'Not implemented'
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should instantiate an error with a custom message', () => {
        const customErrorMessage = 'Custom Error Message Test'
        const err = new NotImplementedError(customErrorMessage)
        const actual = err.message
        const expected = customErrorMessage
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should throw error with a default message', () => {
        try {
            throw new NotImplementedError()
        } catch (err) {
            const actual = err.message
            const expected = 'Not implemented'
            strictEqual(actual, expected)
        }
    })
    it('Should throw error with a custom message', () => {
        const customErrorMessage = 'Custom Error Message Test'
        try {
            throw new NotImplementedError(customErrorMessage)
        } catch (err) {
            const actual = err.message
            const expected = customErrorMessage
            strictEqual(actual, expected, 'Error Message Differs')
        }
    })
})