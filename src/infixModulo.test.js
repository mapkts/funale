/* global describe, it, expect */

import infixModulo from './infixModulo'

describe('infixModulo', () => {
  it('divides the first argument by the second and returns the remainer', () => {
    expect( infixModulo(100, 2) ).toBe(0)
    expect( infixModulo(100, 3) ).toBe(1)
    expect( infixModulo(100, 17) ).toBe(15)
  })

  it('preserves javascript-style modulo evaluation for negative numbers', () => {
    expect( infixModulo(-5, 4) ).toBe(-1)
  })
})
