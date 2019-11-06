/* global describe, it, expect */

import all from './all'

describe('all', () => {
  const isEven = x => x % 2 === 0
  const T = () => true

  it('returns true if all elements satisfy the predicate', () => {
    expect( all(isEven, [2, 4, 6]) ).toBe(true)
  })

  it('returns false if any element fails to satisfy the predicate', () => {
    expect( all(isEven, [2, 3, 4]) ).toBe(false)
  })

  it('returns true for an empty list', () => {
    expect( all(T, []) ).toBe(true)
  })

  it('dispatches to objects that implement `all`', () => {
    const obj = { all: () => 'dispatched' }
    expect( all(() => {}, obj) ).toBe('dispatched')
  })
})
