/* global describe, it, expect */

import flatten from './flatten'

describe('flatten', () => {
  it('turns a nested list into a flat one', () => {
    const nest = [1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]
    expect( flatten(nest) ).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    expect( flatten([1, 2, 3]) ).toStrictEqual([1, 2, 3])
    expect( flatten([[], [], []]) ).toStrictEqual([])
  })

  it('handles array-like objects', () => {
    const obj = { length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']] }
    expect( flatten(obj) ).toStrictEqual([1, 2, 3, 'a', 'b', 'c', 'd', 'e'])
  })
})
