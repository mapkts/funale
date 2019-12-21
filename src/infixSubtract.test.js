/* global describe, it, expect */

import infixSubtract from './infixSubtract'

describe('infixSubtract', () => {
  it('subtracts its second argument from its first argument', () => {
    expect( infixSubtract(42, 1) ).toBe(41)
  })
})
