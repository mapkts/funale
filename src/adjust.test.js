/* global describe, it, expect */

import adjust from './adjust'

describe('adjust', () => {
  const inc = x => x + 1
  const list = [1, 2, 3, 4]

  it('applies the given function to the value at the given index of the supplied index', () => {
    expect( adjust(1, inc, list) ).toStrictEqual([1, 3, 3, 4])
    expect( adjust(-1, inc, list) ).toStrictEqual([1, 2, 3, 5])
  })

  it('returns the original array if the supplied index is out of bound', () => {
    expect( adjust(4, inc, list) ).toBe(list)
    expect( adjust(-5, inc, list) ).toBe(list)
  })

  it('does not mutate the original array', () => {
    expect( adjust(1, inc, list) ).toStrictEqual([1, 3, 3, 4])
    expect( list ).toStrictEqual([1, 2, 3, 4])
  })

  it('handles array-like objects', () => {
    function args() { return arguments }
    expect( adjust(1, inc, args(1, 2, 3, 4)) ).toStrictEqual([1, 3, 3, 4])
  })
})
