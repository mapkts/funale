/* global describe, it, expect */

import intersection from './intersection'
import equals from './equals'

describe('intersection', () => {
  const M = [1, 2, 3, 4]
  const M2 = [1, 2, 3, 4, 1, 2, 3, 4]
  const N = [3, 4, 5, 6]
  const N2 = [3, 3, 4, 4, 5, 5, 6, 6]
  it('combines two lists into set of common elements', () => {
    expect( intersection(M, N) ).toStrictEqual([3, 4])
    expect( intersection(M2, N2) ).toStrictEqual([3, 4])
  })

  it('has method `equals` semantis', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function (x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( intersection([0], [-0]) ).toStrictEqual([])
    expect( intersection([-0], [0]) ).toStrictEqual([])
    expect( intersection([NaN], [NaN]) ).toStrictEqual([NaN])
    expect( intersection([new Just([42])], [new Just([42])]) ).toStrictEqual([new Just([42])])
  })
})
