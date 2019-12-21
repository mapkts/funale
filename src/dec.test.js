/* global describe, it, expect */

import dec from './dec'

describe('dec', () => {
  it('decrements its argument', () => {
    expect( dec(-1) ).toBe(-2)
    expect( dec(0) ).toBe(-1)
    expect( dec(3.14).toPrecision(3) ).toBe('2.14')
    expect( dec(-Infinity) ).toBe(-Infinity)
    expect( dec(Infinity) ).toBe(Infinity)
  })
})
