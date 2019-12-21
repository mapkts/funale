/* global describe, it, expect */

import always from './always'

describe('always', () => {
  it('returns a function that always returns the given value', () => {
    expect( always(42)() ).toBe(42)
  })
})
