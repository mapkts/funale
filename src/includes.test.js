/* global describe, it, expect */

import includes from './includes'
import equals from './equals'

describe('includes', () => {
  it('returns true if the element is in the list, otherwise false', () => {
    expect( includes(3, [1, 2, 3, 4]) ).toBe(true)
    expect( includes(5, [1, 2, 3, 4]) ).toBe(false)
  })

  it('returns false for empty list', () => {
    expect( includes(1, []) ).toBe(false)
  })

  it('returns true if substring is part of a string', () => {
    expect( includes('bc', 'abcabc') ).toBe(true)
  })

  it('has funale equals semantics', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function (x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( includes(NaN, [NaN]) ).toBe(true)
    expect( includes(-0, [0]) ).toBe(false)
    expect( includes(new Just([42]), [new Just([42])]) ).toBe(true)
  })
})
