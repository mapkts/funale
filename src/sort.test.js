/* global describe, it, expect */

import sort from './sort'

describe('sort', () => {
  it('sorts the elements of the list and does not affect the supplied list', () => {
    const list = [2, 1, 4, 1, 3, 5]
    expect( sort((a, b) => a - b, list) ).toStrictEqual([1, 1, 2, 3, 4, 5])
    expect(list).toStrictEqual([2, 1, 4, 1, 3, 5])
  })
})
