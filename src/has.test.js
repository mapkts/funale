/* global describe, it, expect */

import has from './has'

describe('has', () => {
  const fred = { name: 'Fred', age: 23 }
  const anon = { age: 99 }

  it('returns true if the specified property is present', () => {
    expect( has('name', fred) ).toBe(true)
  })

  it('returns false if the specified property is absent', () => {
    expect( has('name', anon) ).toBe(false)
  })

  it('does not check properties from the prototype chain', () => {
    const Person = function() {}
    Person.prototype.age = function() {}

    const bob = new Person()
    expect( has('age', bob) ).toBe(false)
  })
})
