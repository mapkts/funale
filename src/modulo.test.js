/* global describe, it, expect */

import modulo from './modulo'

describe('modulo', () => {
  it('divides the second argument by the first and returns the remainer', () => {
    expect( modulo(2, 100) ).toBe(0)
    expect( modulo(3, 100) ).toBe(1)
    expect( modulo(17, 100) ).toBe(15)
  })

  it('preserves javascript-style modulo evaluation for negative numbers', () => {
    expect( modulo(4, -5) ).toBe(-1)
  })
})
