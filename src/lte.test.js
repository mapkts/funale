/* global describe, it, expect */

import lte from './lte'

describe('lte', () => {
  it('checks if the second argument is less than or equal to the first argument', () => {
    expect( lte(2, 1) ).toBe(true)
    expect( lte(1, 2) ).toBe(false)
    expect( lte(2, 2) ).toBe(true)
    expect( lte('xyz', 'abc') ).toBe(true)
    expect( lte('abc', 'xyz') ).toBe(false)
    expect( lte('abc', 'abc') ).toBe(true)
  })
})
