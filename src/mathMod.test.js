/* global describe, it, expect */

import mathMod from './mathMod'

describe('mathMod', () => {
  it('requires integer arguments', () => {
    expect( Number.isNaN(mathMod('s', 3)) ).toBe(true)
    expect( Number.isNaN(mathMod(3, 's')) ).toBe(true)
    expect( Number.isNaN(mathMod(12.2, 3)) ).toBe(true)
    expect( Number.isNaN(mathMod(3, 12.2)) ).toBe(true)
  })

  it('behaves differently than JS modulo', () => {
    expect( mathMod(5, -17) ).not.toBe(-17 % 5)
    expect( mathMod(5, -17.2) ).not.toBe(-17.2 % 5)
    expect( mathMod(-5, 17) ).not.toBe(17 % -5)
  })

  it('computes the true modulo function', () => {
    expect( mathMod(5, -17) ).toBe(3)
    expect( Number.isNaN(mathMod(-5, 17)) ).toBe(true)
    expect( Number.isNaN(mathMod(0, 17)) ).toBe(true)
    expect( Number.isNaN(mathMod(5, 17.2)) ).toBe(true)
    expect( Number.isNaN(mathMod(5.5, 17)) ).toBe(true)
  })
})
