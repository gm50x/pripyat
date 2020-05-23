const { strictEqual } = require('assert')
const { ErrorHandler } = require('../../src/core/middlewares')
const { MockHttpResponse } = require('../utils')

describe('ErrorHandler Tests', () => {
    it('Should instantiate an ErrorHandler object', () => {
        const expected = 'ErrorHandler'
        const obj = new ErrorHandler()
        const actual = obj.constructor.name
        strictEqual(actual, expected, `Object is not an instance of ${expected}`)
    })

    it('Should have a default middleware method', () => {
        const obj = new ErrorHandler()
        const actual = obj.middleware !== undefined
        strictEqual(actual, true, 'Object does not include the middleware method')
    })

    it('Should handle errors with default http status code 500', () => {
        const res = new MockHttpResponse()
        const obj = new ErrorHandler()
        obj.middleware(new Error('Mock Test Error'), null, res, null)
        const actual = res.statusCode
        strictEqual(actual, 500, 'Default error code diverged')
    })

    it('Should handle errors with error and server-time properties', () => {
        const res = new MockHttpResponse()
        const obj = new ErrorHandler()
        obj.middleware(new Error('Mock Test Error'), null, res, null)
        const actual = ['error', 'server-time'].every(p => Object.getOwnPropertyNames(res.obj).includes(p))
        strictEqual(actual, true, 'Object properties have diverged')
    })

    it('Should handle errors with specified http status code', () => {
        const expected = 400
        const res = new MockHttpResponse()
        const obj = new ErrorHandler()
        const err = new Error('Mock Test Error')
        err.statusCode = expected
        obj.middleware(err, null, res, null)
        const actual = res.statusCode
        strictEqual(actual, expected, 'Specific error code diverged')
    })
})