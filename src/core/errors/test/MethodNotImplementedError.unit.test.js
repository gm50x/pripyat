const { strictEqual } = require('assert')

const MethodNotImplementedError = require('../src/MethodNotImplementedError')

describe('MethodNotImplementedError', () => {
    it('Should instantiate an error with a default message', () => {
        const err = new MethodNotImplementedError({})
        const actual = err.message
        const expected = 'GET / not implemented'
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should instantiate an error with a status code 500', () => {
        const err = new MethodNotImplementedError({})
        const actual = err.statusCode
        const expected = 500
        strictEqual(actual, expected, 'Error Status Codes Differs')
    })
    it('Should instantiate an error with specific method and path message', () => {
        const err = new MethodNotImplementedError({ method: 'POST', path: '/test/path' })
        const actual = err.message
        const expected = 'POST /test/path not implemented'
        strictEqual(actual, expected, 'Error Message Differs')
    })
    it('Should throw error with a specific method and path message', () => {
        try {
            throw new MethodNotImplementedError({method: 'DELETE', path: '/test/path'})
        } catch (err) {
            const actual = err.message
            const expected = 'DELETE /test/path not implemented'
            strictEqual(actual, expected, 'Error Message Differs')
        }
    })
})