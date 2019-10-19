/* global describe, it, expect */
/* eslint-disable no-unused-vars */

import length from './length'

describe('length', () => {
  it('returns the length if the length property is presented on the target', () => {
    expect( length([1, 2, 3]) ).toBe(3)
    expect( length('abc') ).toBe(3)
    expect( length((a, b, c) => a + b + c) ).toBe(3)
    expect( length((function () { return arguments })('a', 'b', 'c')) ).toBe(3)
  })

  it('returns NaN if length property is not presented on the target or length property is not of number type', () => {
    expect( length(null) ).toBe(NaN)
    expect( length(undefined) ).toBe(NaN)
    expect( length(true) ).toBe(NaN)
    expect( length(1) ).toBe(NaN)
    expect( length({}) ).toBe(NaN)
    expect( length({ length: undefined }) ).toBe(NaN)
    expect( length({ length: '2' }) ).toBe(NaN)
  })
})
