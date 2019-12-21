/* global describe, it, expect */

import infixSubtract from './subtract'

describe('subtract', () => {
  it('subtracts its first argument from its second argument', () => {
    const dec = infixSubtract(1)
    expect( dec(42) ).toBe(41)
  })
})
