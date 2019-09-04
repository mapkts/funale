/* global describe, it, expect */

import lt from './lt'

describe('lt', () => {
  it('checks if the second argument is less than the first argument', () => {
    expect( lt(2, 1) ).toBe(true)
    expect( lt(1, 2) ).toBe(false)
    expect( lt(2, 2) ).toBe(false)
    expect( lt('xyz', 'abc') ).toBe(true)
    expect( lt('abc', 'xyz') ).toBe(false)
    expect( lt('abc', 'abc') ).toBe(false)
  })
})
