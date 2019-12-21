/* global describe, it, expect */

import infixGte from './infixGte'

describe('infixGte', () => {
  it('checks if the first argument is greater than or equal to the second argument', () => {
    expect( infixGte(2, 1) ).toBe(true)
    expect( infixGte(1, 2) ).toBe(false)
    expect( infixGte(2, 2) ).toBe(true)
    expect( infixGte('xyz', 'abc') ).toBe(true)
    expect( infixGte('abc', 'xyz') ).toBe(false)
    expect( infixGte('abc', 'abc') ).toBe(true)
  })
})
