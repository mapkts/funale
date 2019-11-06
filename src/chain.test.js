/* global describe, it, expect */

import chain from './chain'

describe('chain', () => {
  const double = x => [x * 2]

  it('maps a function over a nested list and flattens the result', () => {
    expect( chain(double, [1, 2, 3]) ).toStrictEqual([2, 4, 6])
  })

  it('does not flatten recursively', () => {
    const fn = xs => (xs[0] ? [xs[0]] : [])
    expect( chain(fn, [ [1], [2, 200], [], [3, [4]] ]) ).toStrictEqual([1, 2, 3])
  })

  it('accepts function in list position and interprets `chain(f, g)` as `f(g(x), x)`', () => {
    const g = function(a) { return a * 2 }
    const f = function(a) {
      return function(b) {
        return b + a
      }
    }
    const bound = chain(f, g)
    expect( bound(10) ).toBe((10 * 2) + 10)
  })

  it('dispatches to objects that implement `chain`', () => {
    const obj = { chain: () => 'dispatched' }
    expect( chain(() => {}, obj) ).toBe('dispatched')
  })
})
