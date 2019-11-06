/* global describe, it, expect */

import flip from './flip'

describe('flip', () => {
  const f = (a, b, c) => `${a} ${b} ${c}`
  const g = flip(f)
  it('returns a function which inverts the first two arguments to the supplied function', () => {
    expect( f('a', 'b', 'c') ).toBe('a b c')
    expect( g('a', 'b', 'c') ).toBe('b a c')
  })

  it('returns a curried function', () => {
    const h = g('a')
    expect( h('b', 'c') ).toBe('b a c')
  })

  it('returns a function with the corret arity', () => {
    const f2 = (a, b) => `${a} ${b}`
    const f3 = (a, b, c) => `${a} ${b} ${c}`
    expect( flip(f2).length ).toBe(2)
    expect( flip(f3).length ).toBe(3)
  })
})
