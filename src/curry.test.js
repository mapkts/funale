/* global describe, it, expect */

import curry from './curry'

describe('curry', () => {
  it('ignores function of zero-arity', () => {
    const f = () => {}
    const g = curry(f)
    expect(g).toBe(f)
  })

  it('curries a unary function', () => {
    const f = x => x
    const g = curry(f)
    expect(g).not.toBe(1)
    expect(g(1)).toBe(1)
  })

  it('allows further currying of a curried function', () => {
    const f = (a, b, c) => a + b * c
    const g = curry(f)
    expect( g.length ).toBe(3)
    expect(g(1, 2, 3)).toBe(7)
    expect(g(1)(2, 3)).toBe(7)
    expect(g(1, 2)(3)).toBe(7)
    expect(g(1, 2)()(3)).toBe(7)
  })
})

