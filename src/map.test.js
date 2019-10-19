/* global describe, it, expect */

import map from './map'

describe('map', () => {
  const inc = x => x + 1
  const dec = x => x - 1
  const double = x => x * 2

  it('maps over arrays', () => {
    expect( map(inc, []) ).toStrictEqual([])
    expect( map(inc, [1, 2, 3]) ).toStrictEqual([2, 3, 4])
  })

  it('maps over objects', () => {
    expect( map(dec, {}) ).toStrictEqual({})
    expect( map(dec, { a: 1, b: 2, c: 3 }) ).toStrictEqual({ a: 0, b: 1, c: 2 })
  })

  it('dispatches to non-array object with a `map` method', () => {
    const obj = { map: () => 'dispatched' }
    expect( map(double, obj) ).toBe('dispatched')
  })
})
