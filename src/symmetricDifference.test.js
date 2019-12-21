/* global describe, it, expect */

import symmetricDifference from './symmetricDifference'
import equals from './equals'

describe('symmetricDifference', () => {
  const M = [1, 2, 3, 4]
  const M2 = [1, 2, 3, 4, 1, 2, 3, 4]
  const N = [3, 4, 5, 6]
  const N2 = [3, 3, 4, 4, 5, 5, 6, 6]
  it('finds the set of all elements in the first list or second list but not both', () => {
    expect( symmetricDifference(M, N) ).toStrictEqual([1, 2, 5, 6])
    expect( symmetricDifference(M2, N2) ).toStrictEqual([1, 2, 5, 6])
  })

  it('has method `equals` semantics', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( symmetricDifference([0], [-0]).length ).toStrictEqual(2)
    expect( symmetricDifference([-0], [0]).length ).toStrictEqual(2)
    expect( symmetricDifference([NaN], [NaN]) ).toStrictEqual([])
    expect( symmetricDifference([new Just([42])], [new Just([42])]) ).toStrictEqual([])
  })
})
