/* global describe, it, expect */

import negate from './negate'

describe('negate', () => {
  it('negates its argument', () => {
    expect( negate(-Infinity) ).toBe(Infinity)
    expect( negate(-1) ).toBe(1)
    expect( negate(-0) ).toBe(0)
    expect( negate(0) ).toBe(-0)
    expect( negate(1) ).toBe(-1)
    expect( negate(Infinity) ).toBe(-Infinity)
  })
})
