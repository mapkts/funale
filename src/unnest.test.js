/* global describe, it, expect */

import unnest from './unnest'

describe('unnest', () => {
  it('only flattens one layer deep of a nested list', () => {
    const nest = [1, [2], [3, [4, 5], 6, [[[7], 8]]], 9, 10]
    expect( unnest(nest) ).toStrictEqual([1, 2, 3, [4, 5], 6, [[[7], 8]], 9, 10])
    expect( unnest([1, 2, 3]) ).toStrictEqual([1, 2, 3])
    expect( unnest([[], [], []]) ).toStrictEqual([])
  })

  it('handles array-like objects', () => {
    const obj = { length: 3, 0: [1, 2, [3]], 1: [], 2: ['a', 'b', 'c', ['d', 'e']] }
    expect( unnest(obj) ).toStrictEqual([1, 2, [3], 'a', 'b', 'c', ['d', 'e']])
  })
})
