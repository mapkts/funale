/* global describe, it, expect */

import gt from './gt'

describe('gt', () => {
  it('checks if the second argument is greater than the first argument', () => {
    expect( gt(2, 1) ).toBe(false)
    expect( gt(1, 2) ).toBe(true)
    expect( gt(2, 2) ).toBe(false)
    expect( gt('xyz', 'abc') ).toBe(false)
    expect( gt('abc', 'xyz') ).toBe(true)
    expect( gt('abc', 'abc') ).toBe(false)
  })
})
