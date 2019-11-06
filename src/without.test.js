/* global describe, it, expect */

import without from './without'
import equals from './equals'

describe('without', () => {
  it('returns an array without values in the first argument', () => {
    expect( without([2, 3], [1, 2, 3, 4]) ).toStrictEqual([1, 4])
  })

  it('has funale `equals` semantics', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function (x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( without([0], [-0]) ).toStrictEqual([-0])
    expect( without([-0], [0]) ).toStrictEqual([0])
    expect( without([NaN], [NaN]) ).toStrictEqual([])
    expect( without([[1]], [[1]]) ).toStrictEqual([])
    expect( without([new Just([42])], [new Just([42])]) ).toStrictEqual([])
  })
})
