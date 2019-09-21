/* global describe, it, expect */

import uniq from './uniq'
import equals from './equals'

describe('uniq', () => {
  it('returns a set based on predicate', () => {
    expect( uniq([-1, 1, 0, 1, -1]) ).toStrictEqual([-1, 1, 0])
  })

  it('returns an empty array for an empty array', () => {
    expect( uniq([]) ).toStrictEqual([])
  })

  it('has funale equals semantics', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( uniq([NaN, NaN]).length ).toBe(1)
    expect( uniq([[1], [1]]).length ).toBe(1)
    expect( uniq([{ x: 1 }, { x: 1 }]).length ).toBe(1)
    expect( uniq([NaN, NaN, [1], [1], { x: 1 }, { x: 1 }]).length ).toBe(3)
    expect( uniq([new Just(1), new Just(1)]).length ).toBe(1)
  })
})
