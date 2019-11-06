/* global describe, it, expect */

import endsWith from './endsWith'

describe('endsWith', () => {
  it('returns true when a string ends with the provided substring', () => {
    expect( endsWith('c', 'abc') ).toBe(true)
    expect( endsWith('bc', 'abc') ).toBe(true)
  })

  it('returns false when a string does not ends with the provided substring', () => {
    expect( endsWith('b', 'abc') ).toBe(false)
    expect( endsWith('ab', 'abc') ).toBe(false)
  })

  it('returns true when a list ends with the provided sublist', () => {
    expect( endsWith(['c'], ['a', 'b', 'c']) ).toBe(true)
    expect( endsWith(['b', 'c'], ['a', 'b', 'c']) ).toBe(true)
  })

  it('returns false when a list does not ends with the provided sublist', () => {
    expect( endsWith(['b'], ['a', 'b', 'c']) ).toBe(false)
    expect( endsWith(['a', 'b'], ['a', 'b', 'c']) ).toBe(false)
  })
})
