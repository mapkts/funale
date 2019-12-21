/* global describe, it, expect */

import difference from './difference'
import equals from './equals'

describe('difference', () => {
  const M = [1, 2, 3, 4]
  const M2 = [1, 2, 3, 4, 1, 2, 3, 4]
  const N = [3, 4, 5, 6]
  const N2 = [3, 3, 4, 4, 5, 5, 6, 6]
  it('finds the set of all elements in the second list not contained in the first', () => {
    expect( difference(M, N) ).toStrictEqual([1, 2])
    expect( difference(M2, N2) ).toStrictEqual([1, 2])
  })

  it('has method `equals` semantics', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( difference([0], [-0]) ).toStrictEqual([0])
    expect( difference([-0], [0]) ).toStrictEqual([-0])
    expect( difference([NaN], [NaN]) ).toStrictEqual([])
    expect( difference([new Just([42])], [new Just([42])]) ).toStrictEqual([])
  })
})
