/* global describe, it, expect */

import and from './and'

describe('and', () => {
  it('compares two values with js &&', () => {
    expect( and(true, true) ).toBe(true)
    expect( and(true, false) ).toBe(false)
    expect( and(false, true) ).toBe(false)
    expect( and(false, false) ).toBe(false)
  })
})
