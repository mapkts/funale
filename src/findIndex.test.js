/* global describe, it, expect */

import findIndex from './findIndex'

describe('findIndex', () => {
  const obj1 = { x: 100 }
  const obj2 = { x: 200 }
  const xs = [1, 2, obj1, 100, obj2, 200]
  const isEven = x => x % 2 === 0
  const gt100 = x => x > 100
  const xGt100 = obj => obj.x > 100

  it('returns the index of the first element that satisfies the predicate', () => {
    expect( findIndex(isEven, xs) ).toBe(1)
    expect( findIndex(gt100, xs) ).toBe(5)
    expect( findIndex(xGt100, xs) ).toBe(4)
  })

  it('returns -1 when no element satisfies the predicate', () => {
    expect( findIndex(isEven, ['hhh']) ).toBe(-1)
    expect( findIndex(isEven, []) ).toBe(-1)
  })
})
