/* global describe, it, expect */

import infixGt from './infixGt'

describe('infixGt', () => {
  it('checks if the first argument is greater than the second argument', () => {
    expect( infixGt(2, 1) ).toBe(true)
    expect( infixGt(1, 2) ).toBe(false)
    expect( infixGt(2, 2) ).toBe(false)
    expect( infixGt('xyz', 'abc') ).toBe(true)
    expect( infixGt('abc', 'xyz') ).toBe(false)
    expect( infixGt('abc', 'abc') ).toBe(false)
  })
})
