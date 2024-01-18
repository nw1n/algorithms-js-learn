import { bubbleSort2 } from '../src/bubbleSort.js'
import { expect } from 'chai'

describe('bubbleSort', () => {
    it('should sort array', () => {
        const src = [9, 8, 7, 1, 6, 5, 3, 2, 4]
        const aim = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const result = bubbleSort2(src.slice())
        expect(result).to.eql(aim)
    })
})
