/* global describe, it, expect */

import infixDivide from './infixDivide'

describe('infixDivide', () => {
  it('divides two numbers', () => {
    expect( infixDivide(42, 2) ).toBe(21)
  })
})
