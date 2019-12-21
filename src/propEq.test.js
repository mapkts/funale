/* global describe, it, expect */

import propEq from './propEq'
import equals from './equals'

describe('propEq', () => {
  const obj1 = { name: 'Abby', age: 7, hair: 'blond' }
  const obj2 = { name: 'Fred', age: 12, hair: 'brown' }

  it('determines whether a particular property matches a given value for a specific object', () => {
    expect( propEq('name', 'Abby', obj1) ).toBe(true)
    expect( propEq('hair', 'brown', obj2) ).toBe(true)
    expect( propEq('hair', 'blond', obj2) ).toBe(false)
  })

  it('has funale equals semantics', () => {
    function Just(x) { this.value = x }
    Just.prototype.equals = function(x) {
      return x instanceof Just && equals(x.value, this.value)
    }

    expect( propEq('value', 0, { value: -0 }) ).toBe(false)
    expect( propEq('value', -0, { value: 0 }) ).toBe(false)
    expect( propEq('value', NaN, { value: NaN }) ).toBe(true)
    expect( propEq('value', new Just([42]), { value: new Just([42]) }) ).toBe(true)
  })
})
