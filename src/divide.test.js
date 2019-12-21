/* global describe, it, expect */

import divide from './divide'

describe('divide', () => {
  it('divides the second argument by the first argument', () => {
    const half = divide(2)
    expect( half(42) ).toBe(21)
  })
})
