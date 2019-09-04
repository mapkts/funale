/* global describe, it, expect */

import gte from './gte'

describe('gte', () => {
  it('checks if the second argument is greater than or equal to the first argument', () => {
    expect( gte(2, 1) ).toBe(false)
    expect( gte(1, 2) ).toBe(true)
    expect( gte(2, 2) ).toBe(true)
    expect( gte('xyz', 'abc') ).toBe(false)
    expect( gte('abc', 'xyz') ).toBe(true)
    expect( gte('abc', 'abc') ).toBe(true)
  })
})
