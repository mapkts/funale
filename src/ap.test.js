/* global describe, it, expect */

import ap from './ap'

describe('ap', () => {
  const double = x => x * 2
  const plus3 = x => x + 3

  it('applies a list of functions to a list of values', () => {
    expect( ap([double, plus3], [1, 2, 3]) ).toStrictEqual([2, 4, 6, 4, 5, 6])
  })

  it('acts as S combinator when only two functions are passed', () => {
    const f = r => a => r + a
    const g = r => r * 2
    const h = ap(f, g)

    expect( h(10) ).toBe(10 + (10 * 2))
  })

  it('dispatches to `ap` method of first argument, if presented', () => {
    const obj = { ap: () => 'dispatched' }
    expect( ap(obj, 0) ).toBe('dispatched')
  })
})
