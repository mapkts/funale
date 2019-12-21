/* global describe, it, expect */

import update from './update'

describe('update', () => {
  it('updates the value at the given index of the supplied array', () => {
    expect( update(1, 3, [1, 2, 3, 4]) ).toStrictEqual([1, 3, 3, 4])
    expect( update(-1, 3, [1, 2, 3, 4]) ).toStrictEqual([1, 2, 3, 3])
  })

  it('returns the original array if the supplied index is out of bounds', () => {
    const list = [1, 2, 3, 4]
    expect( update(4, 4, list) ).toBe(list)
    expect( update(-5, 4, list) ).toBe(list)
  })

  it('accepts array-like objects', () => {
    function args() { return arguments }
    expect( update(1, 3, args(1, 2, 3, 4)) ).toStrictEqual([1, 3, 3, 4])
  })
})
