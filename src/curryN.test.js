/* global describe, it, expect */

import curryN from './curryN'

describe('curryN', () => {
  const src = (a, b, c, d) => a + b + c

  it('Returns a curried equivalent of the provided function with the specified arity', () => {
    const curried = curryN(3, src)
    expect( curried.length ).toBe(3)
    expect( curried(1, 2, 3) ).toBe(6)
    expect( curried(1, 2)(3) ).toBe(6)
    expect( curried(1)(2, 3) ).toBe(6)
    expect( curried(1)(2)(3) ).toBe(6)
  })

  it('forwards extra arguments', () => {
    const f = function () { return Array.prototype.slice.call(arguments) }
    const g = curryN(3, f)
    const h = curryN(1, f)

    expect( g(1, 2, 3) ).toStrictEqual([1, 2, 3])
    expect( g(1, 2, 3, 4) ).toStrictEqual([1, 2, 3, 4])
    expect( g(1, 2)(3, 4) ).toStrictEqual([1, 2, 3, 4])
    expect( g(1)(2, 3, 4) ).toStrictEqual([1, 2, 3, 4])
    expect( g(1)(2)(3, 4) ).toStrictEqual([1, 2, 3, 4])
    expect( h(1, 2, 3, 4) ).toStrictEqual([1, 2, 3, 4])
  })
})
