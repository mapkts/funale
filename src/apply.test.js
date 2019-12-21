/* global describe, it, expect */

import apply from './apply'

describe('apply', () => {
  it('applies function to argument list', () => {
    expect( apply(Math.max, [1, 2, 3, -99, 42, 6, 7]) ).toBe(42)
  })
})
