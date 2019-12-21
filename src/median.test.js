/* global describe, it, expect */

import median from './median'

describe('median', () => {
  it('returns the median of a given list of numbers', () => {
    expect( median([2]) ).toBe(2)
    expect( median([2, 9, 7]) ).toBe(7)
    expect( median([7, 2]) ).toBe(4.5)
    expect( median([7, 2, 10, 9]) ).toBe(8)
  })

  it('returns NaN for an empty list', () => {
    expect( median([]) ).toBe(NaN)
  })

  it('handles array-like objects', () => {
    expect( median((function () { return arguments })(1, 2, 3)) ).toBe(2)
  })
})
