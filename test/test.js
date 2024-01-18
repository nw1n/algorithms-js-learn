// test.mjs
import { sum } from '../src/sum.js'
import assert from 'assert'

it('should add two numbers from an es module', () => {
    assert.equal(sum(3, 5), 8)
})
