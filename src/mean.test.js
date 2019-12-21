/* global describe, it, expect */

import mean from './mean'

describe('mean', () => {
  it('returns the mean of a non-empty list', () => {
    expect( mean([2]) ).toBe(2)
    expect( mean([2, 7]) ).toBe(4.5)
    expect( mean([2, 7, 9]) ).toBe(6)
  })

  it('returns NaN for an empty list', () => {
    expect( mean([]) ).toBe(NaN)
  })

  it('handles array-like objects', () => {
    expect( mean((function() { return arguments })(1, 2, 3)) ).toBe(2)
  })
})
