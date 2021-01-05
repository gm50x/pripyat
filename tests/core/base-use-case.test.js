const { strictEqual } = require('assert')

const { BaseUseCase } = require('../../src/core/base')

describe('BaseUseCase Unit Tests', () => {
    it('Should instantiate a BaseUseCase', () => {
        const expected = 'BaseUseCase'

        const obj = new BaseUseCase()
        const actual = obj.constructor.name

        strictEqual(actual, expected, `Object is not an instance of the ${expected}`)
    })

    it('Should have a default handle method', () => {
        const obj = new BaseUseCase()
        const actual = obj.handle !== undefined
        strictEqual(actual, true, 'Object does not include the handle method')
    })
})