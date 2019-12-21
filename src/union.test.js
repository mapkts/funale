/* global describe, it, expect */

import union from './union'
import equals from './equals'

describe('union', () => {
  const M = [1, 2, 3, 4]
  const N = [3, 4, 5, 6]
  it('combines two lists into the set of all their elements', () => {
    expect( union(M, N) ).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('has method `equals` semantis', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function (x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( union([0], [-0]) ).toStrictEqual([0, -0])
    expect( union([-0], [0]) ).toStrictEqual([-0, 0])
    expect( union([NaN], [NaN]) ).toStrictEqual([NaN])
    expect( union([new Just([42])], [new Just([42])]) ).toStrictEqual([new Just([42])])
  })
})
