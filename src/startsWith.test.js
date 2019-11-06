/* global describe, it, expect */

import startsWith from './startsWith'

describe('endsWith', () => {
  it('returns true when a string starts with the provided substring', () => {
    expect( startsWith('a', 'abc') ).toBe(true)
    expect( startsWith('ab', 'abc') ).toBe(true)
  })

  it('returns false when a string does not starts with the provided substring', () => {
    expect( startsWith('b', 'abc') ).toBe(false)
    expect( startsWith('bc', 'abc') ).toBe(false)
  })

  it('returns true when a list starts with the provided sublist', () => {
    expect( startsWith(['a'], ['a', 'b', 'c']) ).toBe(true)
    expect( startsWith(['a', 'b'], ['a', 'b', 'c']) ).toBe(true)
  })

  it('returns false when a list does not starts with the provided sublist', () => {
    expect( startsWith(['b'], ['a', 'b', 'c']) ).toBe(false)
    expect( startsWith(['b', 'c'], ['a', 'b', 'c']) ).toBe(false)
  })
})
