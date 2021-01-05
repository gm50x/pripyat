const { strictEqual } = require('assert')
const { AsyncWrapper } = require('../../src/core/middlewares')

describe('AsyncWrapper Tests', () => {
    it('Should instantiate an AsyncWrapper object', () => {
        const expected = 'AsyncWrapper'
        const obj = new AsyncWrapper()
        const actual = obj.constructor.name
        strictEqual(actual, expected, `Object is not an instance of ${expected}`)
    })

    it('Should have a default warp method', () => {
        const obj = new AsyncWrapper()
        const actual = obj.wrap !== undefined
        strictEqual(actual, true, 'Object does not include the wrap method')
    })
})