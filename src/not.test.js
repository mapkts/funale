/* global describe, it, expect */

import not from './not'

describe('not', () => {
  it('inverses the argument', () => {
    expect( not(false) ).toBe(true)
    expect( not(1) ).toBe(false)
    expect( not('') ).toBe(true)
  })
})
