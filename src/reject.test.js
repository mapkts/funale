/* global describe, it, expect */

import reject from './reject'

describe('reject', () => {
  const isOdd = x => x % 2 === 1
  const isPositive = x => x > 0

  it('reduces an array to those not matching a filter', () => {
    expect( reject(isOdd, [1, 3, 5, 2, 4, 6]) ).toStrictEqual([2, 4, 6])
  })

  it('returns an empty array if no matches or performing on an empty array', () => {
    expect( reject(isOdd, [1, 3, 5]) ).toStrictEqual([])
    expect( reject(isOdd, []) ).toStrictEqual([])
  })

  it('works on objects', () => {
    expect( reject(isPositive, { a: 1, b: 2, c: 3 }) ).toStrictEqual({})
    expect( reject(isPositive, { a: -1, b: 0, c: 1 }) ).toStrictEqual({ a: -1, b: 0 })
  })

  it('dispatches to non-array object with a `filter` method', () => {
    const obj = { filter: () => 'dispatched' }
    expect( reject(x => x, obj) ).toBe('dispatched')
  })
})
