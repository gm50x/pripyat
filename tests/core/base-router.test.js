const { strictEqual } = require('assert')

const { BaseRouter } = require('../../src/core/base')

describe('BaseRouter Unit Tests', () => {
    it('Should instantiate a BaseRouter', () => {
        const expected = 'BaseRouter'

        const obj = new BaseRouter()
        const actual = obj.constructor.name

        strictEqual(actual, expected, `Object is not an instance of the ${expected}`)
    })

    it('Should have an addRoute method', () => {
        const obj = new BaseRouter()
        const actual = obj.addRoute !== undefined
        strictEqual(actual, true, 'Object does not include addRoute method')
    })

    it('Should have a getRoutes method', () => {
        const obj = new BaseRouter()
        const actual = obj.getRoutes !== undefined
        strictEqual(actual, true, 'Object does not include addRoute method')
    })
})