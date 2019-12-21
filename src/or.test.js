/* global describe, it, expect */

import or from './or'

describe('or', () => {
  it('compares two values with js ||', () => {
    expect( or(true, true) ).toBe(true)
    expect( or(true, false) ).toBe(true)
    expect( or(false, true) ).toBe(true)
    expect( or(false, false) ).toBe(false)
  })
})
