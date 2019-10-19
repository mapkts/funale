/* global describe, it, expect */

import filter from './filter'

describe('filter', () => {
  const isOdd = x => x % 2 === 1
  const isPositive = x => x > 0

  it('reduces an array to those matching a filter', () => {
    expect( filter(isOdd, [1, 2, 3, 4, 5]) ).toStrictEqual([1, 3, 5])
  })

  it('returns an empty array if no matches or performing on an empty array', () => {
    expect( filter(isOdd, [2, 4, 6]) ).toStrictEqual([])
    expect( filter(isOdd, []) ).toStrictEqual([])
  })

  it('works on objects', () => {
    expect( filter(isPositive, { a: 0, b: 0, c: 0 }) ).toStrictEqual({})
    expect( filter(isPositive, { a: 0, b: 1, c: 2 }) ).toStrictEqual({ b: 1, c: 2 })
  })

  it('dispatches to non-array object with a `filter` method', () => {
    const obj = { filter: () => 'dispatched' }
    expect( filter(x => x, obj) ).toBe('dispatched')
  })
})
