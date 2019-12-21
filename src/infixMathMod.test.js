/* global describe, it, expect */

import infixMathMod from './infixMathMod'

describe('infixMathMod', () => {
  it('requires integer arguments', () => {
    expect( Number.isNaN(infixMathMod('s', 3)) ).toBe(true)
    expect( Number.isNaN(infixMathMod(3, 's')) ).toBe(true)
    expect( Number.isNaN(infixMathMod(12.2, 3)) ).toBe(true)
    expect( Number.isNaN(infixMathMod(3, 12.2)) ).toBe(true)
  })

  it('behaves differently than JS modulo', () => {
    expect( infixMathMod(-17, 5) ).not.toBe(-17 % 5)
    expect( infixMathMod(-17.2, 5) ).not.toBe(-17.2 % 5)
    expect( infixMathMod(17, -5) ).not.toBe(17 % -5)
  })

  it('computes the true modulo function', () => {
    expect( infixMathMod(-17, 5) ).toBe(3)
    expect( Number.isNaN(infixMathMod(17, -5)) ).toBe(true)
    expect( Number.isNaN(infixMathMod(17, 0)) ).toBe(true)
    expect( Number.isNaN(infixMathMod(17.2, 5)) ).toBe(true)
    expect( Number.isNaN(infixMathMod(17, 5.5)) ).toBe(true)
  })
})
